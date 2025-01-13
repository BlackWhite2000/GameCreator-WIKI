<script setup lang="ts">
const route = useRoute()
const locale = ref('zh_hans')

const props = defineProps({
  type: {
    type: Number,
    default: 0
  }
})

const langData = await useLangData(locale.value)

const allTargets = computed(() => [
  {
    name: langData?.numberVariables,
    type: 0,
    url: `/${locale.value}/commands/gameprogress/numbervariables`,
  },
  {
    name: langData?.switch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/switchs`
  },
  {
    name: langData?.stringVariables,
    type: 1,
    url: `/${locale.value}/commands/gameprogress/stringvariables`
  },
  {
    name: langData?.ngNumberVariables,
    type: 0,
    url: `/${locale.value}/commands/gameprogress/ngnumbervariables`
  },
  {
    name: langData?.ngSwitch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/ngswitchs`
  },
  {
    name: langData?.ngStringVariables,
    type: 1,
    url: `/${locale.value}/commands/gameprogress/ngstringvariables`
  },
  {
    name: langData?.objectSwitch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/objectswitchs`
  }
])

const filteredTargets = computed(() => allTargets.value.filter(item => item.type === Number(props.type)))
</script>

<template>
  <div class="flex flex-wrap" v-if="filteredTargets">
    <div v-for="item in filteredTargets" :key="item.url">
      <ULink :to="item.url === route.path ? null : item.url" class="mr-6"
        :inactive-class="item.url === route.path ? 'font-bold cursor-default text-white' : ''">
        {{ item.name }}
      </ULink>
    </div>
  </div>
</template>
