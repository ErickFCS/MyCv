import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";


// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/lang": {
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
                target: "http://localhost:3000"
            }
        }
    }
});
