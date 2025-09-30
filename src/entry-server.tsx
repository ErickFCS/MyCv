import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { ResumeDataSchema } from './types'
import jsYaml from 'js-yaml'
import fs from 'fs/promises'

export async function render(_url: string) {
  const staticData = jsYaml.load(await fs.readFile("./public/data/ES.yaml", "utf-8")) as any
  const resumeData = ResumeDataSchema.parse(staticData)
  const html = renderToString(
    <StrictMode>
      <App resumeData={resumeData} />
    </StrictMode>,
  )
  return { html }
}
