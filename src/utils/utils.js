export const setComicStorage = (type, content) => {
  const comic = JSON.parse(localStorage.getItem('comic')) || {}
  comic[type] = content
  localStorage.setItem('comic', JSON.stringify(comic))
}

