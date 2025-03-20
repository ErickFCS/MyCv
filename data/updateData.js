// @ts-check

import fs from 'fs/promises'
import YAML from 'js-yaml'

const baseURL = 'http://localhost:3000/lang'
const files = [
    {
        name: 'ES',
        filepath: './ES.yaml'
    }
]

for (let i = 0; i < files.length; i++) {
    const { name, filepath } = files[i]
    const data = JSON.stringify(YAML.load(await fs.readFile(`./data/${filepath}`, 'utf8')))
    await fetch(`${baseURL}/${name}`, {
        method: 'PUT',
        body: data,
        headers: {
            'content-type': 'application/json'
        }
    })
        .catch((err) => {
            console.log(err)
        })
}