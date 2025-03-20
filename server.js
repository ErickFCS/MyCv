// @ts-check

import jsonserver from 'json-server'

const app = jsonserver.create()
const router = jsonserver.router('./db.json')
const middleware = jsonserver.defaults({
    static: './docs',
    bodyParser: true
})
app.use(middleware)
app.use(router)
const PORT = Number.parseInt(process.argv[2]) || 3000
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})