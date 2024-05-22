<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const lang = useLang().lang

const navigation = inject<Ref<NavItem[]>>('navigation')


import mediumZoom from 'medium-zoom'
onMounted(async () => {
  await nextTick()
  mediumZoom(document.querySelectorAll('img'), {
    background: 'rgba(0, 0, 0, 0.8)',
  })
})

const route = useRoute()
const { navPageFromPath } = useContentHelpers()
const { headerLinks } = useNavigation()

const links = computed(() => headerLinks.value.find(link => link.to === '/docs')?.children ?? [])

const navigationLinks = computed(() => {
  const path = [`/${lang}`, route.params.slug?.[1]].filter(Boolean).join('/')
  return mapContentNavigation(navPageFromPath(path, navigation.value)?.children || [])
})


</script>

<template>
  <UContainer>
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

<style>
.medium-zoom-overlay {
  z-index: 98;
}

.medium-zoom-image {
  z-index: 99;
}
</style>
