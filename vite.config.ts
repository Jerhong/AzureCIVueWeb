import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * reference: https://stackoverflow.com/a/66389044
 */
function getEnvBase(mode: string) {
  let ViteEnv: { [key: string]: string } = { ...loadEnv(mode, process.cwd()) };

  return mode == "dev" ? "" : `/${ViteEnv.VITE_IIS_Site}`;
}

function getDisplayName(mode: string) {
  let ViteEnv: { [key: string]: string } = { ...loadEnv(mode, process.cwd()) };
  let suffix = mode == "production" ? "" : "(QAS)";

  return ViteEnv.VITE_Display_Application + suffix;
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: getEnvBase(mode),

  server: {
    port: 5175,
  },
  plugins: [
    vue(),

    // https://vue-i18n.intlify.dev/guide/advanced/sfc#bundling-with-vite
    VueI18nPlugin(),
    VitePWA({
      // strategies: "injectManifest",

      // https://vite-pwa-org.netlify.app/guide/inject-manifest#service-worker-errors-on-browser
      // injectManifest: {
      //   injectionPoint: undefined
      // },

      // injectRegister: "auto",
      injectRegister: null,

      manifest: {
        name: getDisplayName(mode),
        description: `${getDisplayName(mode)} PWA Application.`,
        display: "standalone",
        background_color: "#b5d1ff",
        theme_color: "#b5d1ff",
        lang: "zh",

        icons: [
          {
            src: `${getEnvBase(mode)}/icons/android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: `${getEnvBase(mode)}/icons/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],

  // https://stackoverflow.com/a/79003101
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))
