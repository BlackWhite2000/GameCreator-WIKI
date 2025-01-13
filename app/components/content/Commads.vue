<script setup lang="ts">

const route = useRoute()
const locale = ref('zh_hans')

defineProps({
  mid: {
    type: Number,
    default: -1
  }
})

</script>

<template>
  <div>
    <UCard class="overflow-y-auto h-[500px]" v-if="mid">
      <ContentQuery :path="`/${locale}/commands`" v-slot="{ data }">
        <div class="grid sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 w-full gap-2">
          <template v-for="(item, index) in data" :key="index" class="text-gray-600">
            <UButton color="white" variant="ghost" :to="item._path"
              v-if="item.applicationScope && item.applicationScope.includes(Number(mid))" class="ml-1.5">
              {{ item.title }}
            </UButton>
          </template>
        </div>
      </ContentQuery>
    </UCard>
  </div>
</template>
