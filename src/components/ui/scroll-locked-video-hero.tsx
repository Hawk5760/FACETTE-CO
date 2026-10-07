"use client"

import React, { useEffect, useRef, useState } from "react"

// ─────────────────────────────────────────────────────────────
// FACETTE & CO — locked scroll-scrub video hero
// The page cannot move while this is active — body is pinned
// with position:fixed (the same bulletproof technique modal
// libraries use; plain overflow:hidden alone isn't reliable
// across browsers). Wheel/touch input is captured and used
// purely to drive video.currentTime, forward and backward. Once
// the video reaches the end and the user keeps pushing forward,
// the page unlocks and continues normally — and re-locks if they
// scroll back up into it.
// ─────────────────────────────────────────────────────────────

export interface MetroHeroProps {
  videoSrc?: string
  title?: string
  eyebrow?: string
  subline?: string
  scrollHint?: string
  tagline?: string
  signature?: { name: string; url: string } | false
  /** Total input distance (px) needed to scrub the full video. Tune to taste. */
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
  /** Optional callback or unlock control */
  unlockOnEnd?: boolean
}

// High-definition luxury boutique door opening and stepping into showroom
const DEFAULT_VIDEO = "https://assets.mixkit.co/videos/42861/42861-720.mp4"
const DEFAULT_SIGNATURE = { name: "FACETTE & CO", url: "/about-us" }
const SANS = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
const SERIF = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

const COL_BG = "#090C0E"
const COL_TEXT = "#E9E4DC"
const COL_GOLD = "#D5B581"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function MetroHero({
  videoSrc = DEFAULT_VIDEO,
  title = "WHERE MATERIAL BECOMES POSSIBILITY",
  eyebrow = "MATERIAL • DESIGN • CRAFT",
  subline = "GEMSTONES · DESIGN & MANUFACTURING · FASHION HARDWARE · CORPORATE GIFTING",
  scrollHint = "SCROLL TO ENTER ATELIER",
  tagline = "Exceptional materials, considered design and precise execution — created for those who imagine beyond the ordinary.",
  signature = DEFAULT_SIGNATURE,
  scrubDistance = 2400,
  className,
  style,
  unlockOnEnd = true,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let duration = 0
    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let hasStartedScrolling = false
    let isSeeking = false
    let pendingTime: number | null = null
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0
    let isUnlockedAtBottom = false

    const onLoadedData = () => {
      duration = video.duration || 0
      setReady(true)
      if (reduceMotion) {
        video.currentTime = duration * 0.92
      }
    }
    video.addEventListener("loadeddata", onLoadedData)

    // iOS Safari & Mobile kickstart load
    const kickstartLoad = () => {
      const p = video.play()
      if (p && typeof p.then === "function") {
        p.then(() => video.pause()).catch(() => {})
      } else {
        video.pause()
      }
    }
    kickstartLoad()

    const onSeeked = () => {
      isSeeking = false
      if (pendingTime !== null) {
        const t = pendingTime
        pendingTime = null
        isSeeking = true
        video.currentTime = t
      }
    }
    video.addEventListener("seeked", onSeeked)

    function seekTo(t: number) {
      if (isSeeking) {
        pendingTime = t
        return
      }
      isSeeking = true
      video.currentTime = t
    }

    function engageLock() {
      if (locked || typeof document === "undefined") return
      locked = true
      isUnlockedAtBottom = false
      lockedScrollY = window.scrollY
      const b = document.body.style
      b.position = "fixed"
      b.top = `-${lockedScrollY}px`
      b.left = "0"
      b.right = "0"
      b.width = "100%"
      b.height = "100%"
      b.overscrollBehavior = "none"
    }

    function releaseLock() {
      if (!locked || typeof document === "undefined") return
      locked = false
      const y = lockedScrollY
      const b = document.body.style
      b.position = ""
      b.top = ""
      b.left = ""
      b.right = ""
      b.width = ""
      b.height = ""
      b.overscrollBehavior = ""
      window.scrollTo(0, y)
    }

    // Check if user is at the top of the page to re-engage
    const handleWindowScroll = () => {
      if (window.scrollY < 20 && isUnlockedAtBottom) {
        engageLock()
      }
    }
    window.addEventListener("scroll", handleWindowScroll, { passive: true })

    engageLock()

    function addDelta(deltaY: number) {
      // If we already reached the end and user continues scrolling down, release the lock
      if (unlockOnEnd && targetProgress >= 0.98 && deltaY > 0) {
        isUnlockedAtBottom = true
        releaseLock()
        return false
      }

      // If user scrolls up while locked at end
      if (isUnlockedAtBottom && deltaY < 0 && window.scrollY <= 10) {
        engageLock()
      }

      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1)
      targetProgress = next
      if (targetProgress > 0.001) hasStartedScrolling = true
      return true
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        const consumed = addDelta(e.deltaY)
        if (consumed) e.preventDefault()
      } else if (window.scrollY <= 10 && e.deltaY < 0) {
        // Re-lock when scrolling back into hero
        engageLock()
        addDelta(e.deltaY)
        e.preventDefault()
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0
    }
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchStartY
      const deltaY = touchStartY - y
      touchStartY = y
      if (locked) {
        const consumed = addDelta(deltaY)
        if (consumed) e.preventDefault()
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.18

      if (duration > 0) {
        seekTo(currentProgress * duration)
      }

      if (videoRef.current) {
        const scale = 1 + currentProgress * 0.08
        videoRef.current.style.transform = `scale(${scale})`
      }
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.35, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translateY(${(1 - t) * -28}px) scale(${0.96 + t * 0.04})`
        titleRef.current.style.filter = `blur(${(1 - t) * 10}px)`
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
      }
      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.72) / 0.24, 0, 1)
        taglineRef.current.style.opacity = String(t)
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px) scale(${0.97 + t * 0.03})`
        taglineRef.current.style.filter = `blur(${(1 - t) * 8}px)`
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame)
    }

    return () => {
      video.removeEventListener("loadeddata", onLoadedData)
      video.removeEventListener("seeked", onSeeked)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("scroll", handleWindowScroll)
      section.removeEventListener("touchstart", onTouchStart, true)
      section.removeEventListener("touchmove", onTouchMove, true)
      cancelAnimationFrame(rafId)
      releaseLock()
    }
  }, [scrubDistance, unlockOnEnd])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: COL_BG,
        touchAction: "none",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready ? 1 : 0,
          transformOrigin: "center center",
          willChange: "transform",
          transition: "opacity 0.6s ease",
          touchAction: "none",
          pointerEvents: "none",
        }}
      />

      {/* Luxury Vignette & Gold Hue Gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(9,12,14,0.65) 0%, rgba(14,61,61,0.15) 30%, rgba(9,12,14,0.3) 70%, rgba(9,12,14,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Central Title (Serif Editorial Treatment) */}
      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {eyebrow && (
          <span
            style={{
              fontFamily: SANS,
              fontSize: "clamp(11px, 1.3vw, 13px)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: COL_GOLD,
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </span>
        )}
        <span
          style={{
            fontFamily: SERIF,
            fontWeight: 300,
            fontSize: "clamp(32px, 7vw, 98px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: COL_TEXT,
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            display: "inline-block",
            willChange: "transform, filter, opacity",
            textTransform: "uppercase",
            maxWidth: "1100px",
          }}
        >
          {title}
        </span>
        {subline && (
          <span
            style={{
              fontFamily: SANS,
              fontSize: "clamp(9px, 1vw, 11px)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(213, 181, 129, 0.75)",
              marginTop: "20px",
              fontWeight: 400,
            }}
          >
            {subline}
          </span>
        )}
      </div>

      {/* Payoff Tagline as doors open into jewelry boutique */}
      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontSize: "clamp(10px, 1.2vw, 12px)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: COL_GOLD,
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            WELCOME INSIDE
          </span>
          <span
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(24px, 4vw, 54px)",
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              color: COL_TEXT,
              textShadow: "0 4px 28px rgba(0,0,0,0.8)",
              maxWidth: "850px",
            }}
          >
            &ldquo;{tagline}&rdquo;
          </span>
        </div>
      )}

      {/* Scroll Hint */}
      <div
        ref={hintRef}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(24px, 6vh, 48px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          color: COL_GOLD,
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.2vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.3em",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span>{scrollHint}</span>
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          style={{ animation: "metro-hero-bounce 1.6s ease-in-out infinite" }}
        >
          <style>{`
            @keyframes metro-hero-bounce {
              0%, 100% { transform: translateY(0); opacity: 0.5; }
              50% { transform: translateY(5px); opacity: 1; }
            }
          `}</style>
          <path
            d="M7 1 L7 17 M2 12 L7 17 L12 12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Gold Progress Bar Line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: "rgba(213, 181, 129, 0.2)",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, #05624C 0%, #D5B581 100%)",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {signature && (
        <span
          style={{
            position: "absolute",
            right: "clamp(16px, 2.5vw, 32px)",
            bottom: "clamp(12px, 2vw, 20px)",
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: "clamp(10px, 1.2vw, 12px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(213,181,129,0.7)",
            zIndex: 2,
          }}
        >
          <a
            href={signature.url}
            style={{
              color: "rgba(213,181,129,0.85)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = COL_TEXT
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = "rgba(213,181,129,0.85)"
            }}
          >
            {signature.name} &bull; ATELIER
          </a>
        </span>
      )}
    </div>
  )
}
