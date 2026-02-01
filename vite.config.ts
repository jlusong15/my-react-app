import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	// resolve: {
	// 	alias: {
	// 		"@assets": path.resolve(__dirname, "./src/assets"),
	// 		"@": path.resolve(__dirname, "./src"),
	// 	},
	// },
})
