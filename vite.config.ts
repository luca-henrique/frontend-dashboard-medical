import { defineConfig as testConfig } from "vitest/config";
import { defineConfig, mergeConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(path.dirname(new URL(import.meta.url).pathname), "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
}) as UserConfig;

const tstConfig = testConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});

const mergedConfig = mergeConfig(config, tstConfig);

export default mergedConfig;
