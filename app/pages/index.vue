<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-50rem)] xl:left-[calc(50%-24rem)] right-0"
      aria-hidden="true">
      <div
        class="aspect-[1108/632] w-full bg-gradient-to-r from-[rgb(var(--color-primary-DEFAULT))] to-white/20 opacity-20"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%);">
      </div>
    </div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>
          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <img src="https://cdn.gcw.wiki/gcw/image/zh_hans/getting-started/2.aboutgc/100.png">
      <!-- <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" /> -->
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
