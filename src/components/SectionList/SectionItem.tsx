import { Section } from '../../types'
import ItemList from './ItemList/Index'
import Card from 'react-bootstrap/Card'


const SectionItem = ({ section }: { section: Section }) => {
    return (
        <Card>
            <Card.Header as='h4'>
                {section.name}
            </Card.Header>
            <ItemList items={section.items} />
        </Card>
    )
}

export default SectionItem