<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { filter, filterAndExtract } from '~/utils/navigation'
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
  ogSiteName: seo?.siteName,
})

provide('navigation', navigation)

const tocData = filterAndExtract(filter(navigation.value, lang), lang)
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
      <LazyUContentSearch :files="files" :navigation="tocData" :hideColorMode="true" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
