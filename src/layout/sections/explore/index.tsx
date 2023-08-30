import { ExploreHeading, StyledExplore } from 'layout/sections/explore/explore.styles.ts'
import { Container } from 'components/common/container'
import { ExploreItems } from 'components/explore-items'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const Explore = ({ onClickBuyNow }: Props) => {
    return (
        <StyledExplore>
            <Container>
                <ExploreHeading>Explore the God of War series</ExploreHeading>
                <ExploreItems onClickBuyNow={onClickBuyNow} />
            </Container>
        </StyledExplore>
    )
}
