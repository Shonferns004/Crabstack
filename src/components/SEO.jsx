import { useEffect } from 'react'

const DEFAULT_DESCRIPTION = 'Crabstack is a performance-focused digital agency building premium digital products, platforms, and brand experiences.'
const DEFAULT_OG_IMAGE = '/crab2.0.png'

function ensureMeta(attr, value) {
  const selector = `meta[${attr}]`
  let el = document.head.querySelector(`${selector}[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  return el
}

function ensureLink(rel) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  return el
}

function absoluteUrl(baseUrl, value) {
  if (!value) return baseUrl
  if (/^https?:\/\//i.test(value)) return value
  return `${baseUrl}${value.startsWith('/') ? value : `/${value}`}`
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  keywords = '',
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Crabstack',
  type = 'website',
  jsonLd = null,
}) {
  useEffect(() => {
    const siteName = 'Crabstack'
    const baseUrl = (import.meta.env.VITE_SITE_URL || window.location.origin || '').replace(/\/$/, '')
    const canonicalUrl = absoluteUrl(baseUrl, path)
    const imageUrl = absoluteUrl(baseUrl, image)
    const fullTitle = title ? `${title} | ${siteName}` : siteName

    document.title = fullTitle

    ensureMeta('name', 'description').setAttribute('content', description)
    ensureMeta('name', 'keywords').setAttribute('content', keywords)
    ensureMeta('name', 'robots').setAttribute('content', 'index,follow,max-image-preview:large')
    ensureMeta('name', 'author').setAttribute('content', siteName)
    ensureMeta('name', 'application-name').setAttribute('content', siteName)
    ensureMeta('name', 'apple-mobile-web-app-title').setAttribute('content', siteName)
    ensureMeta('name', 'apple-mobile-web-app-capable').setAttribute('content', 'yes')
    ensureMeta('name', 'theme-color').setAttribute('content', '#0b0b0d')
    ensureMeta('name', 'referrer').setAttribute('content', 'strict-origin-when-cross-origin')
    ensureMeta('name', 'format-detection').setAttribute('content', 'telephone=no')

    ensureMeta('property', 'og:type').setAttribute('content', type)
    ensureMeta('property', 'og:locale').setAttribute('content', 'en_IN')
    ensureMeta('property', 'og:site_name').setAttribute('content', siteName)
    ensureMeta('property', 'og:title').setAttribute('content', fullTitle)
    ensureMeta('property', 'og:description').setAttribute('content', description)
    ensureMeta('property', 'og:url').setAttribute('content', canonicalUrl)
    ensureMeta('property', 'og:image').setAttribute('content', imageUrl)
    ensureMeta('property', 'og:image:secure_url').setAttribute('content', imageUrl)
    ensureMeta('property', 'og:image:type').setAttribute('content', 'image/png')
    ensureMeta('property', 'og:image:width').setAttribute('content', '1200')
    ensureMeta('property', 'og:image:height').setAttribute('content', '630')
    ensureMeta('property', 'og:image:alt').setAttribute('content', imageAlt)

    ensureMeta('name', 'twitter:card').setAttribute('content', 'summary_large_image')
    ensureMeta('name', 'twitter:title').setAttribute('content', fullTitle)
    ensureMeta('name', 'twitter:description').setAttribute('content', description)
    ensureMeta('name', 'twitter:image').setAttribute('content', imageUrl)
    ensureMeta('name', 'twitter:image:alt').setAttribute('content', imageAlt)

    ensureLink('canonical').setAttribute('href', canonicalUrl)
    ensureLink('alternate').setAttribute('href', canonicalUrl)
    ensureLink('alternate').setAttribute('hreflang', 'en')

    const scriptId = 'seo-json-ld'
    const existing = document.getElementById(scriptId)
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, path, keywords, image, imageAlt, type, jsonLd])

  return null
}
