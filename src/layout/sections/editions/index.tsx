import { editions } from 'data'
import { Container } from 'components/common/container'
import { S } from 'layout/sections/editions/editions.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { EditionCard } from 'components/edition-card'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const Editions = ({ onClickBuyNow }: Props) => {
    const EditionCards = editions.map((card, idx) => (
        <EditionCard onClickBuyNow={onClickBuyNow} key={idx} card={card} />
    ))

    return (
        <S.Editions>
            <Container>
                <S.EditionsHeading>Editions</S.EditionsHeading>
                <FlexContainer justify="center" wrap="wrap" gap="1.5rem">
                    {EditionCards}
                </FlexContainer>
            </Container>
        </S.Editions>
    )
}
