import { useContext } from 'react'

import { AppContext } from 'app/model'
import { Container } from 'components/common/container'
import { EditionsHeading, StyledEditions } from 'layout/sections/editions/editions.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { EditionCard } from 'components/edition-card'

export const Editions = () => {
    const { editions } = useContext(AppContext)
    const EditionCards = editions.map(card => <EditionCard card={card} />)

    return (
        <StyledEditions>
            <Container>
                <EditionsHeading>Editions</EditionsHeading>
                <FlexContainer justify="center" wrap="wrap" gap="1.5rem">
                    {EditionCards}
                </FlexContainer>
            </Container>
        </StyledEditions>
    )
}
