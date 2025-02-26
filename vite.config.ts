import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			outDir: "dist",
		}),
	],
	build: {
		lib: {
			entry: "src/index.ts",
			name: "ReactNotify",
			formats: ["es", "umd"],
			fileName: (format) => `react-notify.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
