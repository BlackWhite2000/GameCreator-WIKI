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

const { data: commands } = await useAsyncData(`filtered-commands-item-${props.typeName}-${props.pageName}`, () => {
  return queryCollection('docs')
    .where('path', 'LIKE', `/zh_hans/commands/${props.typeName}/${props.pageName}%`)
    .all()
})
</script>

<template>
  <div>
    <ul>
      <slot></slot>
      <template v-for="(item, index) in commands" :key="index">
        <li v-if="item?.description" class="text-gray-600">
          <NuxtLink :to="item._path">
            {{ item.title }}
          </NuxtLink>
          <span class="text-gray-400"> - {{ item.description }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
