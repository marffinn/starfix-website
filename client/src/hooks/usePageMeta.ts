import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

/**
 * Hook to manage page meta tags for SEO
 * Updates document title and meta tags dynamically
 */
export const usePageMeta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  canonicalUrl,
}: PageMetaProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Update Open Graph tags
    if (ogTitle) {
      let ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (!ogTitleTag) {
        ogTitleTag = document.createElement("meta");
        ogTitleTag.setAttribute("property", "og:title");
        document.head.appendChild(ogTitleTag);
      }
      ogTitleTag.setAttribute("content", ogTitle);
    }

    if (ogDescription) {
      let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
      if (!ogDescriptionTag) {
        ogDescriptionTag = document.createElement("meta");
        ogDescriptionTag.setAttribute("property", "og:description");
        document.head.appendChild(ogDescriptionTag);
      }
      ogDescriptionTag.setAttribute("content", ogDescription);
    }

    if (ogUrl) {
      let ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (!ogUrlTag) {
        ogUrlTag = document.createElement("meta");
        ogUrlTag.setAttribute("property", "og:url");
        document.head.appendChild(ogUrlTag);
      }
      ogUrlTag.setAttribute("content", ogUrl);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, canonicalUrl]);
};
