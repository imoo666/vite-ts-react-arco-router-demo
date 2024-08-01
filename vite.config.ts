import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

// 打包成单页面
// export default defineConfig({
//   plugins: [react(), viteSingleFile()]
// })
