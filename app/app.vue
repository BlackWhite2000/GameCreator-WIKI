<script setup lang="ts">
import { zh_cn } from '@nuxt/ui/locale'
import { Analytics } from '@vercel/analytics/nuxt'

// const route = useRoute()
const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('zh_hans'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('zh_hans'), {
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
  ogImage: 'https://cdn.gcw.wiki/gcw/social-card.png',
  twitterImage: 'https://cdn.gcw.wiki/gcw/social-card.png',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <UApp :locale="zh_cn">
    <NuxtLoadingIndicator />
    <Analytics />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />
    <ClientOnly>
      <LazyUContentSearch v-if="navigation" :files="files" :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>
