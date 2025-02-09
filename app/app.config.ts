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
    siteName: 'GameCreator WIKI - 记录游戏开发制作教程'
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
      // {
      // 'icon': 'i-simple-icons-github',
      // 'to': 'https://github.com/nuxt-ui-pro/docs/tree/v3',
      // 'target': '_blank',
      // 'aria-label': 'GitHub'
      // }
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
    // title: 'Table of Contents',
    bottom: {
      // title: 'Community',
      // edit: 'https://github.com/nuxt-ui-pro/docs/edit/v3/content',
      // links: [{
      //   icon: 'i-lucide-star',
      //   label: 'Star on GitHub',
      //   to: 'https://github.com/nuxt/ui',
      //   target: '_blank'
      // }, {
      //   icon: 'i-lucide-book-open',
      //   label: 'Nuxt UI Pro docs',
      //   to: 'https://ui3.nuxt.dev/getting-started/installation/pro/nuxt',
      //   target: '_blank'
      // }, {
      //   icon: 'i-simple-icons-nuxtdotjs',
      //   label: 'Purchase a license',
      //   to: 'https://ui.nuxt.com/pro/purchase',
      //   target: '_blank'
      // }]
    }
  }
})
