<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { filter, filterAndExtract } from '~/utils/navigation'

const lang = useLang().lang

const navigation = inject<Ref<NavItem[]>>('navigation')
const tocData = lang ? filterAndExtract(filter(navigation.value, lang), lang) : null


import mediumZoom from 'medium-zoom'
onMounted(async () => {
  await nextTick()
  mediumZoom(document.querySelectorAll('img'), {
    background: 'rgba(0, 0, 0, 0.8)',
  })
})
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree v-if="tocData" :links="mapContentNavigation(tocData)" />
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
