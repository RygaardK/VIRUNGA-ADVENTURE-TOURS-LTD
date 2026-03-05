import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords, canonicalUrl, ogImage }) => {
  const siteUrl = 'https://virungaadventuretours.com';
  const defaultImage = `${siteUrl}/images/og-default.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={`${siteUrl}${canonicalUrl}`} />}
      <meta property="og:site_name" content="Virunga Adventure Tours" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
    </Helmet>
  );
};

export default SEOHead;
