<script setup lang="ts">
const route = useRoute()
const locale = ref('zh_hans')

const props = defineProps({
  type: {
    type: Number,
    default: 0
  }
})

const langData = 'zh_hans'

const allTargets = computed(() => [
  {
    name: '数值变量设值',
    type: 0,
    url: `/${locale.value}/commands/gameprogress/numbervariables`,
  },
  {
    name: '开关设置',
    type: 2,
    url: `/${locale.value}/commands/gameprogress/switchs`
  },
  {
    name: '字符串设值',
    type: 1,
    url: `/${locale.value}/commands/gameprogress/stringvariables`
  },
  {
    name: '二周目数值变量设值',
    type: 0,
    url: `/${locale.value}/commands/gameprogress/ngnumbervariables`
  },
  {
    name: '二周目开关设置',
    type: 2,
    url: `/${locale.value}/commands/gameprogress/ngswitchs`
  },
  {
    name: '二周目字符串设值',
    type: 1,
    url: `/${locale.value}/commands/gameprogress/ngstringvariables`
  },
  {
    name: '二周目对象开关设置',
    type: 2,
    url: `/${locale.value}/commands/gameprogress/objectswitchs`
  }
])

const filteredTargets = computed(() => allTargets.value.filter(item => item.type === Number(props.type)))
</script>

<template>
  <div class="flex flex-wrap" v-if="filteredTargets">
    <div v-for="item in filteredTargets" :key="item.url">
      <NuxtLink :to="item.url === route.path ? null : item.url"
        class="text-[var(--ui-primary)] w-max hover:underline cursor-pointer mr-6"
        :inactive-class="item.url === route.path ? 'font-bold cursor-default text-white' : ''">
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>
