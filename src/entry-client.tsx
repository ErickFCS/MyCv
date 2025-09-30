import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ResumeDataSchema } from './types'
import jsYaml from 'js-yaml'
import App from './App'


const rawData = await fetch("/data/ES.yaml")
    .then(res => res.text())
    .catch(err => console.log(err)) as any
const staticData = jsYaml.load(rawData)
const resumeData = ResumeDataSchema.parse(staticData)
hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App resumeData={resumeData} />
  </StrictMode>,
)
