import { Info } from '../../types'
import InfoItem from './InfoItem'
import Stack from 'react-bootstrap/Stack'


const InfoList = ({ infos }: { infos: Info[] }) => {
    return (
        <Stack gap={1} direction='horizontal' style={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {infos.map((e, i) => (
                <InfoItem key={`infoItem${i}`} info={e} />
            ))}
        </Stack>
    )
}

export default InfoList