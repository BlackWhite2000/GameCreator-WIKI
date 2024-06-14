import { defineStore } from 'pinia'

export const useLang = defineStore('lang', () => {
  const lang = ref<'zh_hans' | 'zh_hant' | 'en'>('zh_hans')
  const isSetLang = ref(false)

  return {
    lang,
    isSetLang
  }
}, {
  persist: true
})
