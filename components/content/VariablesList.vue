<script setup lang="ts">
const lang = computed(() => useLang().lang || 'zh_hans')

const props = defineProps({
  type: {
    type: Number,
    default: 0
  }
})

const i18nData = {
  'zh_hans': {
    'numberVariables': '数值变量设值',
    'switch': '开关设置',
    'stringVariables': '字符串设值',
    'ngNumberVariables': '二周目数值设值',
    'ngSwitch': '二周目开关设置',
    'ngStringVariables': '二周目字符串设值',
    'gameNumberVariables': '游戏数值'
  },
}

const currentLangData = computed(() => i18nData[lang.value] || i18nData['zh_hans'])

const allTargets = computed(() => [
  {
    name: currentLangData.value.numberVariables,
    type: 0,
    url: `/${lang.value}/commands/gameprogress/numbervariables`,
  },
  {
    name: currentLangData.value.switch,
    type: 2,
    url: `/${lang.value}/commands/gameprogress/switchs`
  },
  {
    name: currentLangData.value.stringVariables,
    type: 1,
    url: `/${lang.value}/commands/gameprogress/stringvariables`
  },
  {
    name: currentLangData.value.ngNumberVariables,
    type: 0,
    url: `/${lang.value}/commands/gameprogress/ngnumbervariables`
  },
  {
    name: currentLangData.value.ngSwitch,
    type: 2,
    url: `/${lang.value}/commands/gameprogress/ngswitchs`
  },
  {
    name: currentLangData.value.ngStringVariables,
    type: 1,
    url: `/${lang.value}/commands/gameprogress/ngstringvariables`
  }
])

const filteredTargets = computed(() => allTargets.value.filter(item => item.type === Number(props.type)))
</script>

<template>
  <div class="flex flex-wrap" v-if="filteredTargets">
    <div v-for="item in filteredTargets" :key="item.url">
      <ULink :to="item.url === $route.path ? null : item.url" class="mr-6"
        :inactive-class="item.url === $route.path ? 'font-bold cursor-default text-white' : ''">
        {{ item.name }}
      </ULink>
    </div>
  </div>
</template>
