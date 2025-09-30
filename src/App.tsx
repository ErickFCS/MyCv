import { ResumeData } from './types'
import InfoList from './components/InfoList'
import SectionList from './components/SectionList/Index'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'

function App({resumeData}: {resumeData: ResumeData | null}) {
    if (resumeData === null) {
        return (
            <Stack style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </Stack>
        )
    }
    return (
        <Stack style={{
            alignItems: 'center',
            width: '100vw'
        }}>
            <Stack style={{
                width: 1050,
                height: 1485,
                // scale: 0.5,
                alignSelf: 'center'
            }}>
                <Stack gap={2} style={{
                    marginTop: 80,
                    marginBottom: 80,
                    marginLeft: 80,
                    marginRight: 80
                }}>
                    <Stack gap={2} direction='horizontal' style={{ alignItems: 'start' }}>
                        <Stack gap={2}>
                            <h1 style={{ margin: 0, fontSize: '' }}>{resumeData.name}</h1>
                            <h2 style={{ margin: 0, fontSize: '' }}>{resumeData.role}</h2>
                            <InfoList infos={resumeData.infos} />
                        </Stack>
                        {resumeData.image &&
                            <Image style={{ width: 151, height: 151 }} src={resumeData.image} />
                        }
                    </Stack>
                    <span>{resumeData.description}</span>
                    <SectionList sections={resumeData.sections} />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default App
