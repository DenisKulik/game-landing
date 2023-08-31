import { S } from 'components/edition-card/edition-card.styles.ts'
import { Edition } from 'data'
import { Button } from 'components/common/button'

type Props = {
    card: Edition
    onClickBuyNow: (edition: string, price: number) => void
}

export const EditionCard = ({ card, onClickBuyNow }: Props) => {
    const infoElements = card.info.map((item, idx) => <S.InfoItem key={idx}>{item}</S.InfoItem>)

    return (
        <S.EditionCard>
            <S.Image
                src={card.img}
                srcSet={`${card.img2x} 2x`}
                alt={card.edition}
                width="316"
                height="173"
            />
            <S.Title>{card.edition}</S.Title>
            <S.Subtitle>{card.platform}</S.Subtitle>
            <S.Info>{infoElements}</S.Info>
            <S.Price>{card.price}$</S.Price>
            <Button
                title="buy now"
                size="small"
                callback={() => onClickBuyNow(card.edition, card.price)}
            />
        </S.EditionCard>
    )
}
