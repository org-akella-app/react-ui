import { mkdir, copyFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

const src = resolve("src/styles.css")
const dest = resolve("dist/styles.css")

await mkdir(dirname(dest), { recursive: true })
await copyFile(src, dest)
