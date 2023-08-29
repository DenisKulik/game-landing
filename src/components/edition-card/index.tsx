import {
    Image,
    Info,
    InfoItem,
    Price,
    StyledEditionCard,
    Subtitle,
    Title,
} from 'components/edition-card/edition-card.styles.ts'
import { Edition } from 'data'
import { Button } from 'components/common/button'

type Props = {
    card: Edition
    onClickBuyNow: (edition: string, price: number) => void
}

export const EditionCard = ({ card, onClickBuyNow }: Props) => {
    const infoElements = card.info.map((item, idx) => <InfoItem key={idx}>{item}</InfoItem>)

    return (
        <StyledEditionCard>
            <Image src={card.img} alt={card.edition} width="316" height="173" />
            <Title>{card.edition}</Title>
            <Subtitle>{card.platform}</Subtitle>
            <Info>{infoElements}</Info>
            <Price>{card.price}$</Price>
            <Button
                title="buy now"
                size="small"
                callback={() => onClickBuyNow(card.edition, card.price)}
            />
        </StyledEditionCard>
    )
}
