import zh_hans from './lang/zh_hans.json'
import en from './lang/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_hans',
  messages: {
    zh_hans,
    // en
  }
}))
