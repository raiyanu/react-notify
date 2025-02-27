import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			outDir: "dist",
		}),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: "src/index.ts",
			name: "ReactNotify",
			formats: ["es", "umd"],
			fileName: (format) => `react-notify.${format}.js`,
		},
		rollupOptions: {
			external: ["react"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
