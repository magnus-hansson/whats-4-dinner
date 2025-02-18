import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [sveltekit()],
    server: {
      watch: {
        usePolling: true
      }
    },
    define: {
      // pass through env variables
      'process.env.DATABASE_URL': JSON.stringify(env.DATABASE_URL),
      'process.env.POSTGRES_URL': JSON.stringify(env.POSTGRES_URL)
    }
  };
});
