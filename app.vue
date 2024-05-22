<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
const lang = useLang().lang

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: lang,
    class: 'dark hello world'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName
})

provide('navigation', navigation)

const { navPageFromPath } = useContentHelpers()
const navigationLinks = computed(() => {
  const path = [`/${lang}`].filter(Boolean).join('/')
  return navPageFromPath(path, navigation.value)?.children || []
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigationLinks" :hide-color-mode="true" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
<style>
.dark {
  --ui-background: var(--color-gray-950);
  --ui-foreground: var(--color-gray-200);
}
</style>
