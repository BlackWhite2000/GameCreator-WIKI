import { defineStore } from 'pinia'

export const useLang = defineStore('lang', () => {

  const lang = ref<'zh-cn' | 'zh-tw' | 'en'>('zh-cn')
  const isSetLang = ref(false)

  return {
    lang,
    isSetLang
  }
}, {
  persist: true,
})
