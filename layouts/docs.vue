<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { filter, filterAndExtract } from '~/utils/navigation'

const lang = useLang().lang

const navigation = inject<Ref<NavItem[]>>('navigation')
const tocData = lang ? filterAndExtract(filter(navigation.value, lang), lang) : null
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree
            v-if="tocData"
            :links="mapContentNavigation(tocData)"
          />
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
