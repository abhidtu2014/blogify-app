import { env } from './src/env/server.mjs';
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

const firebaseConfig = {
  apiKey: 'AIzaSyBrhM-eNGlWBMlu5yZE-FuDXpH9bj21Guk',
  authDomain: 'test-project-4b7e6.firebaseapp.com',
  projectId: 'test-project-4b7e6',
  storageBucket: 'test-project-4b7e6.appspot.com',
  messagingSenderId: '113106008362',
  appId: '1:113106008362:web:f1e120093135a84d654653',
  measurementId: 'G-WH6LGR9JYV',
};

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  output: 'standalone',
  publicRuntimeConfig: {
    firebaseConfig,
  },
});
