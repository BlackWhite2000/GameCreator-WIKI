<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation')

const route = useRoute()
const { navPageFromPath } = useContentHelpers()

const locale = ref('zh_hans')
const langData = await useLangData(locale.value);

const headerLinks = [{
  label: 'Docs',
  icon: 'i-ph-book-bookmark-duotone',
  to: '/docs',
  search: false,
  children: [{
    label: langData?.gettingStartedLabel,
    description: langData?.gettingStartedLabel,
    icon: 'i-heroicons-rocket-launch',
    to: `/${locale.value}/getting-started/introduction`,
    active: route.path.startsWith(`/${locale.value}/getting-started`)
  }, {
    label: langData?.templateLabel,
    description: langData?.templateLabel,
    icon: 'i-heroicons-hashtag',
    to: `/${locale.value}/template`,
    active: route.path.startsWith(`/${locale.value}/template`)
  }, {
    label: langData?.commandsLabel,
    description: langData?.commandsLabel,
    icon: 'i-heroicons-window',
    to: `/${locale.value}/commands`,
    active: route.path.startsWith(`/${locale.value}/commands`)
  }, {
    label: langData?.plugLabel,
    description: langData?.plugLabel,
    icon: 'i-heroicons-puzzle-piece',
    to: `/${locale.value}/plug`,
    active: route.path.startsWith(`/${locale.value}/plug`)
  }, {
    label: 'API',
    description: 'API',
    icon: 'i-heroicons-cube',
    to: `/${locale.value}/library`,
    active: route.path.startsWith(`/${locale.value}/library`)
  }
  ]
}]

const links = computed(() => headerLinks.find(link => link.to === '/docs')?.children ?? [])

const navigationLinks = computed(() => {
  const path = [`/${locale.value}`, route.params.slug?.[1]].filter(Boolean).join('/')
  const data = mapContentNavigation(navPageFromPath(path, navigation.value)?.children || [])
  const arr = route.path.split('/')
  if (arr.length < 2 || route.path.split('/')[2] != 'library') return data
  return sortTree(data);
})

function sortTree(nodes) {
  // 递归处理子节点并排序
  return nodes.map(node => {
    if (node.children) {
      node.children = sortTree(node.children);
    }
    return node;
  }).sort((a, b) => {
    if (a.children && !b.children) {
      return -1;
    } else if (!a.children && b.children) {
      return 1;
    } else {
      return 0;
    }
  });
}

</script>

<template>
  <UContainer class="max-w-[120rem]">
    <UPage>
      <template #left>
        <UAside :links="links">
          <UDivider type="dashed" class="mb-6" />
          <UNavigationTree :links="navigationLinks" default-open :multiple="false" />
          <template #bottom></template>
        </UAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>

<style></style>
