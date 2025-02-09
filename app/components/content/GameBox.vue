<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <UModal fullscreen>
      <div class="text-[var(--ui-primary)] w-max hover:underline cursor-pointer" color="neutral" variant="subtle">
        <slot />
      </div>

      <template #body>
        <iframe class="w-full h-full" :src="props.src" />
      </template>
    </UModal>
  </div>
</template>
