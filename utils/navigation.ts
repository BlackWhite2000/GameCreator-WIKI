export function filter(data, lang) {
  if (!data || !lang) return null
  return data.filter(item => item._path.includes(`/${lang}`) || (item.children && filter(item.children, lang).length > 0))
}

export function filterAndExtract(data, lang, key = 'title') {
  if (!data || !lang || !key) return null

  const filteredData = []

  data.forEach((item) => {
    if (item[key] !== lang) {
      filteredData.push(item)
      if (item.children) {
        filteredData.push(...filterAndExtract(item.children, lang))
      }
    } else {
      if (item.children) {
        filteredData.push(...item.children)
      }
    }
  })

  return filteredData
}
