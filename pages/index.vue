<script setup lang="ts">
const { locale, messages, setLocale } = useI18n()

const messagesLocales = computed(() => {
  const localeKey = locale.value;
  if (messages.value[localeKey]) {
    return messages.value[localeKey];
  }
  return {};
});

useSeoMeta({
  titleTemplate: '',
  title: messagesLocales?.value?.webName,
  ogTitle: messagesLocales?.value?.webName,
  description: messagesLocales?.value?.description,
  ogDescription: messagesLocales?.value?.description
})
</script>

<template>
  <div v-if="messagesLocales">
    <ULandingHero v-if="messagesLocales && messagesLocales.webName" class="mb-0 !pt-20 !pb-12">
      <div
        class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
      <template #title>
        <NuxtIcon name="logo" class="logo-index flex justify-center pb-5 items-center" filled />
        <div class="text-6xl tracking-wide text-primary">
          {{ messagesLocales.webName }}
        </div>
      </template>
      <template #description>
        <div class="text-2xl tracking-wide">
          {{ messagesLocales.description }}
        </div>
      </template>
      <UContentSearchButton size="xl" class="mt-[-3.5rem]" color="primary" :label="messagesLocales.description" />
    </ULandingHero>

    <div class=" text-center font-bold text-2xl tracking-wide py-10">
      {{ messagesLocales.templateTitle }}
    </div>
    <ContentQuery :path="`${locale}/template`">
      <template #default="{ data }">
        <ULandingSection class="!pt-0">
          <UPageGrid class="md:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4">
            <template v-for="item in (data as any)" :key="item._path">
              <ULandingCard v-if="item.mid">
                <ULink :to="`/${locale}/template/${item.mid}`" class="w-full h-full group">
                  <UBadge v-if="item.type" class="absolute top-0 left-0 px-4 m-2" variant="subtle" size="md">
                    {{ item.type }}
                  </UBadge>
                  <NuxtImg v-if="item" :src="`/template/${item.mid}.png`" />
                  <div v-else class="pt-2" />
                  <h2 class="group-hover:text-primary transition ease-in font-bold">
                    {{ item.title }}
                  </h2>
                  <p class="text-sm opacity-60">
                    {{ item.description }}
                  </p>
                </ULink>
              </ULandingCard>
            </template>
          </UPageGrid>
        </ULandingSection>
      </template>
    </ContentQuery>
  </div>
</template>

<style scoped>
.landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}

.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}

.logo-index svg {
  width: 3rem;
  height: 3rem;
}
</style>
