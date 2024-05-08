<script setup lang="ts">

function isTemplate(templateArr: string, mid: number) {
  if (!templateArr || mid == -1) return false
  const idArr = templateArr.split(',')
  return idArr.includes(mid.toString())
}

defineProps({
  mid: {
    type: Number,
    default: -1
  },
})

</script>

<template>
  <div>
    <ContentQuery path="/commands">
      <template #default="{ data }">
        <div v-for="item of data" :key="item.title">
          <template v-if="item.templateArr && isTemplate(item.templateArr, Number(mid))">
            <div>
              {{ item.title }}
            </div>
          </template>
        </div>
      </template>
    </ContentQuery>
  </div>
</template>
