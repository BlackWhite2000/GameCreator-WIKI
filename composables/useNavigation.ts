
import { createSharedComposable } from '@vueuse/core'

const _useNavigation = () => {
  const headerLinks = computed(() => {
    const route = useRoute()
    const { locale, messages, setLocale } = useNuxtApp().$i18n
    const messagesLocales = computed(() => {
      const localeKey = locale.value;
      if (messages.value[localeKey]) {
        return messages.value[localeKey];
      }
      return {};
    });

    return [{
      label: 'Docs',
      icon: 'i-ph-book-bookmark-duotone',
      to: '/docs',
      search: false,
      children: [{
        label: messagesLocales.value?.gettingStartedLabel,
        description: messagesLocales.value?.gettingStartedDescription,
        icon: 'i-heroicons-rocket-launch',
        to: `/${locale.value}/getting-started/introduction`,
        active: route.path.startsWith(`/${locale.value}/getting-started`)
      }, {
        label: messagesLocales.value?.templateLabel,
        description: messagesLocales.value?.templateDescription,
        icon: 'i-heroicons-hashtag',
        to: `/${locale.value}/template`,
        active: route.path.startsWith(`/${locale.value}/template`)
      }, {
        label: messagesLocales.value?.commandsLabel,
        description: messagesLocales.value?.commandsDescription,
        icon: 'i-heroicons-window',
        to: `/${locale.value}/commands`,
        active: route.path.startsWith(`/${locale.value}/commands`)
      }, {
        label: messagesLocales.value?.plugLabel,
        description: messagesLocales.value?.plugDescription,
        icon: 'i-heroicons-puzzle-piece',
        to: `/${locale.value}/plug`,
        active: route.path.startsWith(`/${locale.value}/plug`)
      }, {
        label: messagesLocales.value?.libraryLabel,
        description: messagesLocales.value?.libraryDescription,
        icon: 'i-heroicons-cube',
        to: `/${locale.value}/library`,
        active: route.path.startsWith(`/${locale.value}/library`)
      }]
    }]
  })


  return {
    headerLinks,
  }
}

export const useNavigation = createSharedComposable(_useNavigation)
