import {
    Image,
    Info,
    InfoItem,
    Price,
    StyledEditionCard,
    Subtitle,
    Title,
} from 'components/edition-card/edition-card.styles.ts'
import { Edition } from 'app/model'
import { Button } from 'components/common/button'

type Props = {
    card: Edition
}

export const EditionCard = ({ card }: Props) => {
    const infoElements = card.info.map(item => <InfoItem>{item}</InfoItem>)

    return (
        <StyledEditionCard>
            <Image src={card.img} alt={card.edition} width="316" height="173" />
            <Title>{card.edition}</Title>
            <Subtitle>{card.platform}</Subtitle>
            <Info>{infoElements}</Info>
            <Price>{card.price}$</Price>
            <Button title="buy now" size="small" />
        </StyledEditionCard>
    )
}
