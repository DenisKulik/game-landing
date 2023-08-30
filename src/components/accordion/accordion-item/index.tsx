import { FAQItem } from 'data'
import { S } from 'components/accordion/accordion-item/accordion-item.styles.ts'
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
        <S.AccordionItem>
            <S.AccordionHeader onClick={onOpenItem} justify="space-between" align="center">
                <S.Question>{item.question}</S.Question>
                <S.Plus
                    active={active ? active.toString() : undefined}
                    aria-label="toggle-answer"
                />
            </S.AccordionHeader>
            <S.AccordionContent>
                <S.Answer active={active ? active.toString() : undefined}>{item.answer}</S.Answer>
            </S.AccordionContent>
        </S.AccordionItem>
    )
}
