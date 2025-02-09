<script setup lang="ts">
const props = defineProps({
  mid: {
    type: Number,
    default: -1
  }
})

const { data: commands } = await useAsyncData('filtered-commands', () => {
  return queryCollection('docs')
    .where('path', 'LIKE', '/zh_hans/commands/%')
    .all()
})
const filteredCommands = computed(() => {
  return commands.value.filter(v => v.navigation?.applicationScope?.includes(Number(props.mid)))
})
</script>

<template>
  <div>
    <UCard class="overflow-y-auto h-[500px]" v-if="mid">
      <div class="grid sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 w-full gap-2">
        <template v-for="(item, index) in filteredCommands" :key="index">
          <UButton color="neutral" variant="ghost" :to="item.path" class="ml-1.5">
            {{ item.title }}
          </UButton>
        </template>
      </div>
    </UCard>
  </div>
</template>
