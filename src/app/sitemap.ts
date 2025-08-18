import { MetadataRoute } from 'next'
import { sitemapUrls } from '@/lib/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls.map(({ url, lastModified, changeFrequency, priority }) => ({
    url,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency: changeFrequency || 'monthly',
    priority: priority || 0.5,
  }))
}
