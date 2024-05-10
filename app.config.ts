export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'zinc',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'GCW - GameCreator WIKI'
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/BlackWhite2000/GameCreator-WIKI',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-heroicons-home-20-solid',
      'to': 'https://www.gamecreator.com.cn',
      'target': '_blank',
      'aria-label': 'GameCreator'
    }]
  },
  footer: {
    credits: 'Copyright © 2020',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/BlackWhite2000/GameCreator-WIKI',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-heroicons-home-20-solid',
      'to': 'https://www.gamecreator.com.cn',
      'target': '_blank',
      'aria-label': 'GameCreator'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/BlackWhite2000/GameCreator-WIKI/blob/master/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/BlackWhite2000/GameCreator-WIKI',
        target: '_blank'
      }]
    }
  }
})
