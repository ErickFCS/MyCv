import Stack from 'react-bootstrap/Stack'
// import ListGroup from 'react-bootstrap/ListGroup'
import { Info } from '../../types'
import Icon from '../Icon'



const InfoItem = ({ info }: { info: Info }) => {
    return (
        <Stack gap={1} direction='horizontal' style={{ justifyContent: 'center' }}>
            <Icon name={info.icon} />{' '}
            {info.name &&
                        <strong>{info.name}: </strong>
            }
            {info.data}
        </Stack>
        // <ListGroup style={{ flexGrow: 1 }}>
        //     <ListGroup.Item style={{ whiteSpace: 'nowrap', margin: 2, minWidth: '0vw' }}>
        //     </ListGroup.Item>
        // </ListGroup>
    )
}

export default InfoItem