import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Awesome Java',
  description: 'A curated list of awesome Java frameworks, libraries and software.',
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-L5SPYCH1EJ',
    }),
    docsearchPlugin({
      appId: 'E0Z0E9JPF2',
      apiKey: '15939139fae92452e3e9cbc22994e4d5',
      indexName: 'awesome-java',
      locales: {
        '/': {
          placeholder: 'Search here',
          translations: {
            button: {
              buttonText: 'Search',
            },
          },
        },
      },
    }),
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ]
})
