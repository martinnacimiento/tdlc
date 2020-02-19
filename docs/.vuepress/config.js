module.exports = {
    base: "/teoria-de-la-computacion/",
    head: [
      ['link', { rel: 'icon', href: '/images/icons/icon-72x72.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/images/icons/icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
      ['@vuepress/back-to-top'],
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: true
        }
      ],
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-158708612-1'
        }
      ],
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            const moment = require('moment')
            moment.locale('es')
            return moment(timestamp).fromNow()
          }
        }
      ]
    ],
    title: 'Teoría de la computación',
    description: 'Apuntes de los contenidos dados en la cátedra.',
    theme: 'yuu',
    themeConfig: {
        lastUpdated: 'Última actualización',
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Teoría', link: '/clases-teoria/' },
          { text: 'Práctica', link: '' },
          { text: 'Lecturas', link: '/lecturas/' }
        ],
        sidebar: 'auto'
    }
}