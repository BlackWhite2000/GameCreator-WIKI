<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
const { locale, messages, setLocale } = useI18n()
const messagesLocales = computed(() => {
  const localeKey = locale.value;
  if (messages.value[localeKey]) {
    return messages.value[localeKey];
  }
  return {};
});

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
const langSurround = surround.value.filter(item => item && item._path && item._path.startsWith(`/${locale.value}`))

const { data: dir } = await useAsyncData(`${route.path}-dir`, () => queryContent(route.path)
  .findSurround(route.path).then((v) => {
    return v.find(k => k?._extension == 'yml')
  })
)
const title = dir?.value?.dirName ? `${dir?.value?.dirName} - ${dir?.value?.title} - ${page?.value?.title}` : page?.value?.title

useSeoMeta({
  title: `${title}`,
  ogTitle: `${title} - ${seo?.siteName}`,
  description: page?.value?.description,
  ogDescription: page?.value?.description
})

defineOgImage({
  component: 'Docs',
  title: page?.value?.title,
  description: page?.value?.description
})

// const headline = computed(() => findPageHeadline(page.value))
const headline = computed(() => {
  return page?.value._path.split('/').filter(v => v !== '').filter(v => v !== locale.value).map((v) => {
    return {
      label: v,
      icon: '',
      to: ''
    }
  })
})

const description = computed(() => {
  return page?.value?.description ? page.value.description : dir?.value?.description
})
const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: messagesLocales?.value?.pageEditLabel,
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank'
}, ...(toc?.bottom?.links || [])].filter(Boolean))
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" :description="description" :links="page.links">
      <template #headline>
        <UBreadcrumb :links="headline" />
      </template>
    </UPageHeader>

    <UPageBody prose>
      <!-- 如果是插件 -->
      <Callout icon="i-heroicons-light-bulb" v-if="dir?.pid && route.path != `/${locale}/plug`">
        {{ dir.title }} - {{ description }} -
        <ULink :to="`https://www.gamecreator.com.cn/plug/det/${dir.pid}`" target="_block">{{ messagesLocales?.plugUrl }}
        </ULink>
      </Callout>

      <ContentRenderer v-if="page.body" :value="page" />
      <hr v-if="langSurround?.length">
      <UContentSurround :surround="langSurround" />
    </UPageBody>

    <template v-if="page.toc !== false" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
