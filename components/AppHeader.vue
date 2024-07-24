<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])

const { locale, messages, setLocale } = useI18n()
const messagesLocales = computed(() => {
  const localeKey = locale.value;
  if (messages.value[localeKey]) {
    return messages.value[localeKey];
  }
  return {};
});

const { header } = useAppConfig()

const localesArray = computed(() => {
  return [Object.entries(messages.value).map(([locale, message]) => ({
    label: message?.title,
    locale: locale,
    click: () => {
      setLocale(locale)
    }
  }))];
});
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <NuxtIcon name="logo" class="logo" filled />
        GCW
        <UBadge label="GameCreator WIKI" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" :label="null" class="lg:hidden" />

      <UColorModeButton v-if="header?.colorMode" />

      <UDropdown v-if="localesArray" :items="localesArray" mode="hover" class="mr-2">
        <UButton color="white" :label="messagesLocales?.title" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>

      <template v-if="header?.links">
        <UButton v-for="(link, index) of header.links" :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }" />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>

<style>
.logo svg {
  width: 1.8rem;
  height: 1.8rem;
  margin-bottom: 0;
}
</style>
