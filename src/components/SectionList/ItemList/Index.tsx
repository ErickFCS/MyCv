import { Item } from '../../../types'
import ItemItem from './ItemItem'


const ItemList = ({ items }: { items: Item[] }) => {
    return items.map((e, i) => (
        <ItemItem key={`item${e.name}${i}`} item={e} />
    ))

}

export default ItemList