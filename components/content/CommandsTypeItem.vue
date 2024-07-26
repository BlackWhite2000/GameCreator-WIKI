<script setup lang="ts">
const { locale, messages, setLocale } = useI18n()

defineProps({
  typeName: {
    type: String,
    default: -1
  }
})

</script>

<template>
  <div>
    <ContentQuery :path="`/${locale}/commands/${typeName}`" v-slot="{ data }">
      <ul>
        <template v-for="(item, index) in data" :key="index">
          <li v-if="item?.description">
            <ULink :to="item._path">
              {{ item.title }}
            </ULink>
            <span class="text-gray-400"> - {{ item.description }}</span>
          </li>
        </template>
      </ul>
    </ContentQuery>
  </div>
</template>
