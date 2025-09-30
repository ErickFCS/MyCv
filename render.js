import { spawn } from "child_process";
import { chromium } from "playwright";


const child = spawn("pnpm", ["dev"], { shell: true, stdio: "inherit" });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(process.argv[2] || "http://localhost:5173", { waitUntil: "networkidle" });
await new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, 5000);
});
await page.pdf({
    format: "A4",
    landscape: false,
    margin: {
        bottom: "0mm",
        left: "0mm",
        right: "0mm",
        top: "0mm"
    },
    path: "CV.pdf"
});
console.log("PDF generated");
await browser.close();
child.kill();
