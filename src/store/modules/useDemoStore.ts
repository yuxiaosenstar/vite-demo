// 1. 导入
import { defineStore } from 'pinia'

// 2. 使用
const useDemoStore = defineStore('demoStore', {
  state: () => ({
    arrList: [],
  }),
  actions: {},
  getters: {},
})

// 3. 导出
export default useDemoStore
