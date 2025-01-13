<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

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
    lang: 'zh_hans'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://material.gamecreator.com.cn/webSite/img/20230322a/bg_banner_2k.jpg',
  twitterImage: 'https://material.gamecreator.com.cn/webSite/img/20230322a/bg_banner_2k.jpg',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
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
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>

<style>
.dark {
  --ui-background: 2 4 32;
  --ui-foreground: var(--color-gray-200);
}

blockquote {
  font-style: normal !important;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  p {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
}

.dark blockquote {
  color: rgb(var(--color-gray-300) / 1) !important;
  background-color: #131b30;
}

html .shiki span {
  font-style: normal !important;
}

.dark .prose :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  background-color: #131b30 !important;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
