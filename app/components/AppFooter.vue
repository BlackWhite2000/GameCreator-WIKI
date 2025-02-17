<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      <span>{{ footer.credits }}</span>
      <NuxtLink to="https://beian.miit.gov.cn/" target="_blank"
        class="mx-2 hover:text-[var(--ui-primary)] transition-all">
        粤ICP备2025372185号-1
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton v-for="(link, index) of footer?.links" :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }" />
      </template>
    </template>
  </UFooter>
</template>
