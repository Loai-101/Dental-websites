import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, twitterTitle, twitterDescription }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // Set canonical link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Set Open Graph meta tags
    if (ogTitle) {
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.content = ogTitle;
    }

    if (ogDescription) {
      let ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (!ogDescMeta) {
        ogDescMeta = document.createElement('meta');
        ogDescMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescMeta);
      }
      ogDescMeta.content = ogDescription;
    }

    if (ogUrl) {
      let ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (!ogUrlMeta) {
        ogUrlMeta = document.createElement('meta');
        ogUrlMeta.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrlMeta);
      }
      ogUrlMeta.content = ogUrl;
    }

    // Set Twitter meta tags
    if (twitterTitle) {
      let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitleMeta) {
        twitterTitleMeta = document.createElement('meta');
        twitterTitleMeta.name = 'twitter:title';
        document.head.appendChild(twitterTitleMeta);
      }
      twitterTitleMeta.content = twitterTitle;
    }

    if (twitterDescription) {
      let twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescMeta) {
        twitterDescMeta = document.createElement('meta');
        twitterDescMeta.name = 'twitter:description';
        document.head.appendChild(twitterDescMeta);
      }
      twitterDescMeta.content = twitterDescription;
    }

    // Set default Open Graph type
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (!ogTypeMeta) {
      ogTypeMeta = document.createElement('meta');
      ogTypeMeta.setAttribute('property', 'og:type');
      ogTypeMeta.content = 'website';
      document.head.appendChild(ogTypeMeta);
    }

    // Set default Twitter card
    let twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCardMeta) {
      twitterCardMeta = document.createElement('meta');
      twitterCardMeta.name = 'twitter:card';
      twitterCardMeta.content = 'summary_large_image';
      document.head.appendChild(twitterCardMeta);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogUrl, twitterTitle, twitterDescription]);
};
