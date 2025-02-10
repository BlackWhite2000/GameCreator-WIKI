<script setup lang="ts">
// import type { ContentNavigationItem } from '@nuxt/content'

// const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('zh_hans'))

const filteredChildren = ref([])
const updateNavigation = () => {
  if (!navigation.value) return

  filteredChildren.value = sortTree(navigation.value[0]?.children?.filter(child => route.path.includes(child?.path))[0]?.children) || []
}

/**
 * 监听路由变化，自动更新 navigation
 */
watch(() => route.path, () => {
  updateNavigation()
}, { immediate: true })

/**
 * 递归排序函数
 */
function sortTree(nodes) {
  return nodes?.map(node => {
    if (node.children) {
      node.children = sortTree(node.children)
    }
    return node
  }).sort((a, b) => {
    if (a.children && !b.children) {
      return 1
    } else if (!a.children && b.children) {
      return -1
    } else {
      return 0
    }
  })
}

const navigation2 = ref([
  {
    title: '开始使用',
    icon: 'i-heroicons-rocket-launch',
    path: '/zh_hans/getting-started/introduction'
  },
  {
    title: '模板教程',
    icon: 'i-heroicons-window',
    path: '/zh_hans/template'
  },
  {
    title: '指令教程',
    icon: 'i-heroicons-square-3-stack-3d',
    path: '/zh_hans/commands'
  },
  {
    title: '插件教程',
    icon: 'i-heroicons-wallet',
    path: '/zh_hans/plug'
  },
  {
    title: 'API',
    icon: 'i-heroicons-cube',
    path: '/zh_hans/library'
  }
])
</script>

<template>
  <UContainer class="max-w-full">
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation color="neutral" :navigation="navigation2" />
          <USeparator class="py-8" />
          <UContentNavigation highlight :navigation="filteredChildren" />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
