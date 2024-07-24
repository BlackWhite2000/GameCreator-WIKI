<script setup lang="ts">
const { locale, messages, setLocale } = useI18n()

const props = defineProps({
  type: {
    type: Number,
    default: 0
  }
})

const messagesLocales = computed(() => {
  const localeKey = locale.value;
  if (messages.value[localeKey]) {
    return messages.value[localeKey];
  }
  return {};
});

const allTargets = computed(() => [
  {
    name: messagesLocales.value?.numberVariables,
    type: 0,
    url: `/${locale.value}/commands/gameprogress/numbervariables`,
  },
  {
    name: messagesLocales.value?.switch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/switchs`
  },
  {
    name: messagesLocales.value?.stringVariables,
    type: 1,
    url: `/${locale.value}/commands/gameprogress/stringvariables`
  },
  {
    name: messagesLocales.value?.ngNumberVariables,
    type: 0,
    url: `/${locale.value}/commands/gameprogress/ngnumbervariables`
  },
  {
    name: messagesLocales.value?.ngSwitch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/ngswitchs`
  },
  {
    name: messagesLocales.value?.ngStringVariables,
    type: 1,
    url: `/${locale.value}/commands/gameprogress/ngstringvariables`
  },
  {
    name: messagesLocales.value?.objectSwitch,
    type: 2,
    url: `/${locale.value}/commands/gameprogress/objectswitchs`
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
