import { Section } from '../../types'
import SectionItem from './SectionItem'


const SectionList = ({ sections }: { sections: Section[] }) => {
    return sections.map((e, i) => (
        <SectionItem key={`sectionItem${i}`} section={e} />
    ))
}

export default SectionList