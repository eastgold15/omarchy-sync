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
  hooks: {
    // 市场扫描拒绝超过 512 KiB 的单个源文件。表格库自带的转写表单独成块。
    "rollup:options"(_context, options) {
      const outputs = Array.isArray(options.output) ? options.output : options.output ? [options.output] : [];

      for (const output of outputs) {
        output.manualChunks = (id: string) => {
          if (id.includes("/node_modules/@visulima/tabular/")) return "tabular";
          if (id.includes("/node_modules/@visulima/interactive-manager/")) return "interact";
          return undefined;
        };
      }
    },
  },
})
