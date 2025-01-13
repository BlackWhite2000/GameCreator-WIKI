<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

const pathIndex = route.path.split('/')[2]
// 如果在插件内页
if (pathIndex == 'plug') {
  // 确保在API内页
  const apiIndex = route.path.split('/')[4]
  if (apiIndex && apiIndex == 'api') {
    // 确保在插件内页
    if (route.path.split('/').length > 4) {

      // 得到最后一个路径
      const lastPath = route.path.split('/').pop()
      // 得到插件的名称
      const pluginName = lastPath.split('.')[0]
      // 移除页面名称开头的插件名称，只移除开头的，大小写不敏感
      const pageName = page.value.title.replace(new RegExp(`^${pluginName}`, 'i'), '')
      // 设置页面名称
      page.value.title = pageName
      if (pluginName == 'openapi') {
        // 特殊处理，再次移除
        const pageName = page.value.title.replace(new RegExp(`^${pluginName}`, 'i'), '')
        page.value.title = pageName
      }

      // 设置页面描述
      const pageDescription = page.value.description.split(' > ')
      pageDescription.shift()
      if (pluginName == 'openapi') {
        // 特殊处理，再次移除
        pageDescription.shift()
      }
      page.value.description = pageDescription.join(' > ')

      // 移除页面内容的第一个元素
      if (page.value.body.children && page.value.body.children.length > 0) {
        page.value.body.children.shift()
      }
    }
  }

}

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

// defineOgImage({
//   component: 'Docs',
//   title: page.value.title,
//   description: page.value.description
// })

const headline = computed(() => findPageHeadline(page.value))

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank'
}, ...(toc?.bottom?.links || [])].filter(Boolean))

const path = computed(() => {
  const arr = route.path.split('/')
  if (arr.length < 4) return true
  return route.path.split('/')[2] != 'library'
})
</script>

<template>
  <UPage>
    <UPageHeader v-if="path" :title="page.title" :description="page.description" :links="page.links"
      :headline="headline" />

    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />

      <hr v-if="surround?.length">

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <!-- <UDivider v-if="page.body?.toc?.links?.length" type="dashed" /> -->

            <!-- <UPageLinks :title="toc.bottom.title" :links="links" /> -->
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
