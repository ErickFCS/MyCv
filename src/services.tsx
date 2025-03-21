import { ResumeDataSchema } from './types'
import staticData from '../db.json'

export const getData = async () => {
    try {
        const response = await fetch('/lang/ES')
        const resumeData = ResumeDataSchema.parse(await response.json())
        return [resumeData, true] as const
    } catch (error) {
        console.error(error)
        const resumeData = ResumeDataSchema.parse(staticData.lang[0])
        return [resumeData, false] as const
    }
}