import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: false,
  treeshake: true,
  splitting: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "lucide-react",
    "tailwind-merge",
  ],
})
