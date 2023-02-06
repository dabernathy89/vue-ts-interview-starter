import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const codespaceName = process.env['CODESPACE_NAME'];
const suffix = process.env['GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN'];
const hmrPort = 24678;

const hmrRemoteHost = codespaceName ? `${codespaceName}-${hmrPort}.${suffix}` : 'localhost';
// const hmrRemotePort = codespaceName ? 443 : hmrPort;
const hmrRemotePort = hmrPort;

export default defineConfig({
  server: {
    hmr: {
      host: hmrRemoteHost,
      port: hmrPort,
      clientPort: hmrRemotePort
    },
  },
  preview: {
    port: hmrPort,
  },
  plugins: [vue()],
})
