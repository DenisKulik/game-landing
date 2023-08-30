import { S } from 'layout/sections/faq/faq.styles.ts'
import { Accordion } from 'components/accordion'
import { faq } from 'data'
import { Container } from 'components/common/container'

export const FAQ = () => {
    return (
        <S.FAQ id="faq">
            <Container>
                <S.FAQHeading>FAQ</S.FAQHeading>
                <Accordion data={faq} />
            </Container>
        </S.FAQ>
    )
}
