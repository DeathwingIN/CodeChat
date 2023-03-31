// vite.config.js
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  // omit
//   plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 8000
  }

  
})

