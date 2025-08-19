import { SITE_CONFIG } from "./constants";

export interface SitemapUrl {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const sitemapUrls: SitemapUrl[] = [
  {
    url: SITE_CONFIG.url,
    changeFrequency: "monthly",
    priority: 1.0,
  },
];

export function generateSitemap(): string {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(({ url, lastModified, changeFrequency, priority }) => {
    return `  <url>
    <loc>${url}</loc>
    ${lastModified ? `<lastmod>${new Date(lastModified).toISOString()}</lastmod>` : ""}
    ${changeFrequency ? `<changefreq>${changeFrequency}</changefreq>` : ""}
    ${priority ? `<priority>${priority}</priority>` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return sitemapXml;
}
