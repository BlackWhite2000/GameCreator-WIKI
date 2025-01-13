<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      {{ footer.credits }} - {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <!-- <template v-if="footer?.links">
        <UButton v-for="(link, index) of footer?.links" :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }" />
      </template> -->
    </template>
  </UFooter>
</template>
