<script lang="ts" setup>
const isOpen = ref(false)
const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <div @click="isOpen = true" class="text-primary w-max hover:underline cursor-pointer">
      <slot />
    </div>
    <UModal v-model="isOpen" prevent-close :ui="{ width: 'sm:max-w-[max-content]' }">
      <UCard>
        <template #header>
          <div class="flex items-center justify-end">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen = false" />
          </div>
        </template>

        <iframe width="1200" height="720" class="block" :src="props.src">
        </iframe>
      </UCard>
    </UModal>
  </div>
</template>
