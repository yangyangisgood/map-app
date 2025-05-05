export default defineNuxtConfig({
    css: ['@/assets/style/style.css'],
    modules: ['@element-plus/nuxt'],
    elementPlus: {
      // 可選配置
      importStyle: 'css', // 或 'sass'
      themes: ['dark'],   // 如果你有啟用暗色主題
    }
  })
