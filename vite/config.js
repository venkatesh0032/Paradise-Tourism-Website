import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',    // this tells esbuild to treat .js files as jsx
    include: /src\/.*\.js$/,  // apply to all .js files in src folder
    exclude: [],
  },
})
