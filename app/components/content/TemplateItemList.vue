<script setup lang="ts">

const route = useRoute()
const locale = ref('zh_hans')

</script>

<template>
  <div>
    <ContentQuery :path="`/${locale}/template/`" v-slot="{ data }">
      <ul>
        <slot></slot>
        <template v-for="(item, index) in data" :key="index">
          <li v-if="item?.description" class="text-gray-600">
            <ULink :to="item._path">
              {{ item.type }} - {{ item.title }}
            </ULink>
            <span class="text-gray-400"><br>{{ item.description }}</span>
          </li>
        </template>
      </ul>
    </ContentQuery>
  </div>
</template>
