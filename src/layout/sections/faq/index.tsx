import { FAQHeading, StyledFAQ } from 'layout/sections/faq/faq.styles.ts'
import { Accordion } from 'components/accordion'
import { faq } from 'data'
import { Container } from 'components/common/container'

export const FAQ = () => {
    return (
        <StyledFAQ>
            <Container>
                <FAQHeading>FAQ</FAQHeading>
                <Accordion data={faq} />
            </Container>
        </StyledFAQ>
    )
}
