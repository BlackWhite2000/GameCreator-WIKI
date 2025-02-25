export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    },
    pageHero: {
      slots: {
        container: 'py-0 sm:py-0 lg:py-0 pt-12 sm:pt-24 lg:pt-24'
      }
    }
  },
  seo: {
    siteName: 'GameCreator WIKI - 记录零基础游戏制作教程，轻松实现你的游戏创作梦'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      //   {
      //     'icon': 'i-ant-design-home-filled',
      //     'to': 'https://www.gamecreator.com.cn',
      //     'target': '_blank',
      //     'aria-label': 'GameCreator'
      //   },
      //   {
      //     'icon': 'i-simple-icons-github',
      //     'to': 'https://github.com/BlackWhite2000/GameCreator-WIKI',
      //     'target': '_blank',
      //     'aria-label': 'GitHub'
      //   }
    ]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      //   {
      //   'icon': 'i-simple-icons-nuxtdotjs',
      //   'to': 'https://nuxt.com',
      //   'target': '_blank',
      //   'aria-label': 'Nuxt Website'
      // }, {
      //   'icon': 'i-simple-icons-discord',
      //   'to': 'https://discord.com/invite/ps2h6QT',
      //   'target': '_blank',
      //   'aria-label': 'Nuxt UI on Discord'
      // }, {
      //   'icon': 'i-simple-icons-x',
      //   'to': 'https://x.com/nuxt_js',
      //   'target': '_blank',
      //   'aria-label': 'Nuxt on X'
      // }, {
      //   'icon': 'i-simple-icons-github',
      //   'to': 'https://github.com/nuxt/ui',
      //   'target': '_blank',
      //   'aria-label': 'Nuxt UI on GitHub'
      //   }
    ]
  },
  toc: {
    // title: '目录',
    // bottom: {
    //   title: '文档',
    //   edit: 'https://github.com/BlackWhite2000/GameCreator-WIKI/edit/master/content',
    //   links: [{
    //     icon: 'i-lucide-star',
    //     label: '访问仓库',
    //     to: 'https://github.com/BlackWhite2000/GameCreator-WIKI',
    //     target: '_blank'
    //   }, {
    //     icon: 'i-ant-design-home-filled',
    //     label: 'GameCreator',
    //     to: 'https://www.gamecreator.com.cn',
    //     target: '_blank'
    //   }]
    // }
  }
})
