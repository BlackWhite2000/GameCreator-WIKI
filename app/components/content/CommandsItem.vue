<script setup lang="ts">
const props = defineProps({
  typeName: {
    type: String,
    default: -1
  },
  pageName: {
    type: String,
    default: ''
  }
})

const { data: commands } = await useAsyncData(`filtered-commands-${props.typeName}-${props.pageName}`, () => {
  return queryCollection('docs')
    .where('path', 'LIKE', `/zh_hans/commands/${props.typeName}/${props.pageName}%`)
    .all()
})
</script>

<template>
  <div>
    <slot></slot>
    <template v-for="(item, index) in commands" :key="index">
      <li v-if="item?.description">
        <NuxtLink :to="item.path" class="ml-1.5 text-[var(--ui-primary)] w-max hover:underline cursor-pointer">
          {{ item.title }}
        </NuxtLink>
        <span class="text-gray-400"> - {{ item.description }}</span>
      </li>
    </template>
  </div>
</template>
