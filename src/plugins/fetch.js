export default {
  install(app) {
    app.config.globalProperties.$fetch = (url, options) => {
      return fetch(url, options).then(result => result.json())
    }
  }
}