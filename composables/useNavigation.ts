
import { createSharedComposable } from '@vueuse/core'

const _useNavigation = () => {
  const headerLinks = computed(() => {
    const lang = useLang().lang
    const route = useRoute()

    return [{
      label: 'Docs',
      icon: 'i-ph-book-bookmark-duotone',
      to: '/docs',
      search: false,
      children: [{
        label: i18n[lang]?.gettingStartedLabel,
        description: i18n[lang]?.gettingStartedDescription,
        icon: 'i-heroicons-rocket-launch',
        to: `/${lang}/getting-started/introduction`,
        active: route.path.startsWith(`/${lang}/getting-started`)
      }, {
        label: i18n[lang]?.templateLabel,
        description: i18n[lang]?.templateDescription,
        icon: 'i-heroicons-hashtag',
        to: `/${lang}/template`,
        active: route.path.startsWith(`/${lang}/template`)
      }, {
        label: i18n[lang]?.commandsLabel,
        description: i18n[lang]?.commandsDescription,
        icon: 'i-heroicons-window',
        to: `/${lang}/commands`,
        active: route.path.startsWith(`/${lang}/commands`)
      }, {
        label: i18n[lang]?.plugLabel,
        description: i18n[lang]?.plugDescription,
        icon: 'i-heroicons-puzzle-piece',
        to: `/${lang}/plug`,
        active: route.path.startsWith(`/${lang}/plug`)
      }, {
        label: i18n[lang]?.libraryLabel,
        description: i18n[lang]?.libraryDescription,
        icon: 'i-heroicons-cube',
        to: `/${lang}/library`,
        active: route.path.startsWith(`/${lang}/library`)
      }]
    }]
  })

  const zhCN = {
    gettingStartedLabel: '开始使用',
    gettingStartedDescription: '开始使用',
    templateLabel: '游戏模板教程',
    templateDescription: '游戏模板教程',
    commandsLabel: '指令教程',
    commandsDescription: '指令教程',
    plugLabel: '插件教程',
    plugDescription: '插件教程',
    libraryLabel: '引擎文档',
    libraryDescription: '引擎文档'
  }
  const i18n = {
    'zh-cn': zhCN,
    'zh-tw': zhCN,
    'en': zhCN
  }

  return {
    headerLinks,
  }
}

export const useNavigation = createSharedComposable(_useNavigation)
