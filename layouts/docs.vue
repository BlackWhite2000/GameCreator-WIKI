<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { filter, filterAndExtract } from '~/utils/navigation'
const lang = useLang().lang

const navigation = inject<Ref<NavItem[]>>('navigation')
const tocData = filterAndExtract(filter(navigation.value, lang), lang)
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree :links="mapContentNavigation(tocData)" />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
