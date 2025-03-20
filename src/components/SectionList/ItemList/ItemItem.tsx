// import ListGroup from 'react-bootstrap/ListGroup';
import { Item } from '../../../types'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Icon from '../../Icon'

const ItemItem = ({ item }: { item: Item }) => {
    return (
        <Card.Body>
            <Stack gap={2}>
                {item.name &&
                    <Stack direction='horizontal' style={{ justifyContent: 'space-between' }}>
                        <Card.Title as='h5'>
                            {item.name}
                        </Card.Title>
                        {item.date &&
                            <Card.Subtitle as='h6'>
                                {item.date}
                            </Card.Subtitle>
                        }
                    </Stack>
                }
                {item.clarification &&
                    <Card.Subtitle as='h6'>
                        {item.clarification}
                    </Card.Subtitle>
                }
                {item.list &&
                    <>
                        {item.list_short ?
                            <ListGroup>
                                <Stack direction='horizontal' style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    {item.list.map((e, i) => (
                                        <ListGroup.Item key={`list${item.name}${i}`} style={{ whiteSpace: 'nowrap', borderWidth: 1, flexGrow: 1, minWidth: '50%' }}>
                                            {e.icon &&
                                                <>
                                                    < Icon name={e.icon} />
                                                    {' '}
                                                </>
                                            }
                                            {e.item}
                                        </ListGroup.Item>
                                    ))}
                                </Stack>
                            </ListGroup>
                            :
                            <ul style={{ margin: 0 }}>
                                {item.list.map((e, i) => (
                                    <li key={`list${item.name}${i}`}>{e.item}</li>
                                ))}
                            </ul>
                        }
                    </>
                }
            </Stack>
        </Card.Body>
    )
}

export default ItemItem