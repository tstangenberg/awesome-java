import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Awesome Java',
  description: 'A curated list of awesome Java frameworks, libraries and software.',
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-L5SPYCH1EJ',
    })
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ]
})
