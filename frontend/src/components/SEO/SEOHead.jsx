import { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * SEO Component for managing meta tags dynamically
 * Usage: <SEOHead title="Custom Title" description="Custom Description" />
 */
export default function SEOHead({
  title = "AdminHub - Modern Admin Panel | User Management Dashboard",
  description = "AdminHub is a powerful, modern admin panel built with React and Node.js. Manage users, data, and applications with secure authentication and role-based access control.",
  keywords = "admin panel, dashboard, user management, react admin, node.js, authentication, role-based access, admin dashboard, user interface, web application",
  canonical = "",
  ogImage = "/og-image.png",
  noIndex = false,
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag("name", "description", description);

    // Update meta keywords
    updateMetaTag("name", "keywords", keywords);

    // Update Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);

    // Update Twitter Card tags
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", ogImage);

    // Update canonical URL if provided
    if (canonical) {
      updateCanonicalLink(canonical);
    }

    // Update robots meta tag
    updateMetaTag(
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow"
    );
  }, [title, description, keywords, canonical, ogImage, noIndex]);

  // Helper function to update meta tags
  const updateMetaTag = (attribute, value, content) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      element.setAttribute(attribute, value);
      element.setAttribute("content", content);
      document.getElementsByTagName("head")[0].appendChild(element);
    }
  };

  // Helper function to update canonical link
  const updateCanonicalLink = (href) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (element) {
      element.setAttribute("href", href);
    } else {
      element = document.createElement("link");
      element.setAttribute("rel", "canonical");
      element.setAttribute("href", href);
      document.getElementsByTagName("head")[0].appendChild(element);
    }
  };

  // This component doesn't render anything visible
  return null;
}

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  noIndex: PropTypes.bool,
};

// Pre-defined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: "AdminHub - Modern Admin Panel | User Management Dashboard",
    description:
      "AdminHub is a powerful, modern admin panel built with React and Node.js. Manage users, data, and applications with secure authentication and role-based access control.",
    keywords:
      "admin panel, dashboard, user management, react admin, node.js, authentication, role-based access, admin dashboard, user interface, web application",
  },
  login: {
    title: "Login - AdminHub | Secure Admin Access",
    description:
      "Secure login to AdminHub admin panel. Access your dashboard with role-based authentication and manage users with advanced security features.",
    keywords:
      "login, admin login, secure authentication, admin access, user authentication, dashboard login",
  },
  register: {
    title: "Register - AdminHub | Create Admin Account",
    description:
      "Create your AdminHub account to access the modern admin panel. Get started with user management, secure authentication, and powerful dashboard features.",
    keywords:
      "register, create account, admin registration, signup, new user, admin panel access",
  },
  dashboard: {
    title: "Dashboard - AdminHub | Admin Control Panel",
    description:
      "AdminHub dashboard overview with user statistics, account information, and quick actions. Monitor and manage your admin panel efficiently.",
    keywords:
      "dashboard, admin dashboard, control panel, user statistics, admin overview, management panel",
    noIndex: true, // Dashboard should not be indexed as it requires authentication
  },
  users: {
    title: "User Management - AdminHub | Manage Users",
    description:
      "Comprehensive user management system in AdminHub. View, edit, delete users, manage roles, and control access permissions with advanced admin tools.",
    keywords:
      "user management, manage users, user roles, admin tools, user permissions, user control",
    noIndex: true, // Users page should not be indexed as it requires authentication
  },
};
