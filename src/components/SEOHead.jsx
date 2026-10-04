import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic SEO component that updates head metadata, canonical tags, and JSON-LD schemas.
 */
export default function SEOHead({
  title = "FACETTE & CO — Modern Luxury House × Precision Manufacturing",
  description = "Facette & Co operates across gemstones, bespoke jewellery design & manufacturing, luxury fashion hardware, and corporate gifting.",
  keywords = "certified gemstones, natural emeralds, royal blue sapphires, pigeon blood ruby, bespoke jewellery manufacturing, fashion hardware, corporate gifts",
  schema = null,
}) {
  const location = useLocation();
  const canonicalUrl = `https://facetteandco.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 3. Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. Inject JSON-LD Schema
    const existingScript = document.getElementById('page-schema-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'page-schema-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, schema]);

  return null;
}
