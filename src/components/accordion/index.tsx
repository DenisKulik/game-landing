import { FAQItem } from 'data'
import { AccordionItem } from 'components/accordion/accordion-item'

type Props = {
    data: FAQItem[]
}

export const Accordion = ({ data }: Props) => {
    const AccordionItems = data.map((item, idx) => <AccordionItem key={idx} item={item} />)

    return <div>{AccordionItems}</div>
}
