<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation')

const route = useRoute()
const { navPageFromPath } = useContentHelpers()

const locale = ref('zh_hans')
const langData = await useLangData(locale.value);

const headerLinks = [{
  label: 'Docs',
  icon: 'i-ph-book-bookmark-duotone',
  to: '/docs',
  search: false,
  children: [{
    label: langData?.gettingStartedLabel,
    description: langData?.gettingStartedLabel,
    icon: 'i-heroicons-rocket-launch',
    to: `/${locale.value}/getting-started/introduction`,
    active: route.path.startsWith(`/${locale.value}/getting-started`)
  }, {
    label: langData?.templateLabel,
    description: langData?.templateLabel,
    icon: 'i-heroicons-hashtag',
    to: `/${locale.value}/template`,
    active: route.path.startsWith(`/${locale.value}/template`)
  }, {
    label: langData?.commandsLabel,
    description: langData?.commandsLabel,
    icon: 'i-heroicons-window',
    to: `/${locale.value}/commands`,
    active: route.path.startsWith(`/${locale.value}/commands`)
  }, {
    label: langData?.plugLabel,
    description: langData?.plugLabel,
    icon: 'i-heroicons-puzzle-piece',
    to: `/${locale.value}/plug`,
    active: route.path.startsWith(`/${locale.value}/plug`)
  }
  ]
}]

const links = computed(() => headerLinks.find(link => link.to === '/docs')?.children ?? [])

const navigationLinks = computed(() => {
  const path = [`/${locale.value}`, route.params.slug?.[1]].filter(Boolean).join('/')
  return mapContentNavigation(navPageFromPath(path, navigation.value)?.children || [])
})

</script>

<template>
  <UContainer class="max-w-[120rem]">
    <UPage>
      <template #left>
        <UAside :links="links">
          <UDivider type="dashed" class="mb-6" />
          <UNavigationTree :links="navigationLinks" default-open :multiple="false" />
          <template #bottom></template>
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>

<style></style>
