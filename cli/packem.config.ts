import { defineConfig } from '@visulima/packem/config'
import transformer from '@visulima/packem/transformer/esbuild'

export default defineConfig({
  runtime: "node",
  transformer,
  entries: ["src/index.ts"],
  emitESM: true,
  failOnWarn: false,
  outDir: "dist",
  rollup: {
    // 把 dependencies 全部打进产物,分发时不需要 node_modules
    resolveExternals: { deps: false },
  },
})
