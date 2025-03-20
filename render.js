import { chromium } from 'playwright'
const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.goto(process.argv[2] || 'http://localhost:3000', { waitUntil: 'networkidle' })
await new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 5000)
})
await page.pdf({
    path: 'CV.pdf',
    margin: {
        top: '0mm',
        bottom: '0mm',
        left: '0mm',
        right: '0mm'
    },
    format: 'A4',
    landscape: false
})
console.log('PDF generated')
await browser.close()