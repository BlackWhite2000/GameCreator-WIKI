<script setup lang="ts">
const { data: template } = await useAsyncData('filtered-template', () => {
  return queryCollection('docs')
    .where('path', 'LIKE', '/zh_hans/template/%')
    .all()
})
</script>

<template>
  <div>
    <ul>
      <slot></slot>
      <template v-for="(item, index) in template" :key="index">
        <li v-if="item?.description" class="pb-4 flex flex-col">
          <NuxtLink :to="item.path" class="text-[var(--ui-primary)] w-max hover:underline cursor-pointer">
            {{ item?.navigation?.type }} - {{ item.title }}
          </NuxtLink>
          <span class="text-gray-400 mt-1">{{ item.description }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
