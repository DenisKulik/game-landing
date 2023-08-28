import { FAQItem } from 'data'
import {
    AccordionContent,
    AccordionHeader,
    Answer,
    Plus,
    Question,
    StyledAccordionItem,
} from 'components/accordion/accordion-item/accordion-item.styles.ts'
import { useState } from 'react'

type Props = {
    item: FAQItem
}

export const AccordionItem = ({ item }: Props) => {
    const [active, setActive] = useState(false)

    const onOpenItem = () => {
        setActive(!active)
    }

    return (
        <StyledAccordionItem>
            <AccordionHeader onClick={onOpenItem} justify="space-between" align="center">
                <Question>{item.question}</Question>
                <Plus active={active ? active.toString() : undefined} aria-label="toggle-answer" />
            </AccordionHeader>
            <AccordionContent>
                <Answer active={active ? active.toString() : undefined}>{item.answer}</Answer>
            </AccordionContent>
        </StyledAccordionItem>
    )
}
