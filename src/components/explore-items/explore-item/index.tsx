import { ChangeEvent } from 'react'

import { EditionGame, PcEdition, Platform, PsEdition } from 'data'
import { S } from 'components/explore-items/explore-item/explore-item.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { Button } from 'components/common/button'

type Props = {
    platform: Platform
    title: string
    img: string
    img2x: string
    bgCard: string
    bgCard2x: string
    characteristics: string[]
    edition: EditionGame
    data: PcEdition | PsEdition
    onChangeCurrentEdition: (platform: Platform, checked: boolean) => void
    onClickBuyNow: (edition: string, price: number) => void
}

export const ExploreItem = ({
    platform,
    title,
    img,
    img2x,
    bgCard,
    bgCard2x,
    characteristics,
    edition,
    data,
    onChangeCurrentEdition,
    onClickBuyNow,
}: Props) => {
    const EditionElements = Object.entries(data).map(([key, value], idx) => (
        <S.EditionItem key={idx}>
            <span>{key}</span>
            <span>: {value}</span>
        </S.EditionItem>
    ))

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCurrentEdition(platform, e.currentTarget.checked)
    }

    return (
        <S.ExploreItem>
            <S.ExploreTitle>{title}</S.ExploreTitle>
            <S.Switch justify="center" align="center" gap="1.5rem">
                <S.CurrentEdition edition="min" current={edition}>
                    {characteristics[0]}
                </S.CurrentEdition>
                <S.SwitchControl>
                    <S.Checkbox
                        onChange={onChangeChecked}
                        checked={edition === 'max'}
                        aria-label="switch-editions"
                    />
                    <S.Knob></S.Knob>
                </S.SwitchControl>
                <S.CurrentEdition edition="max" current={edition}>
                    {characteristics[1]}
                </S.CurrentEdition>
            </S.Switch>

            <FlexContainer justify="center" gap="5rem" wrap="wrap">
                <S.ImageWrapper align="flex-end">
                    <S.ImageInner bg={bgCard} bg2x={bgCard2x}>
                        <S.Image src={img} srcSet={`${img2x} 2x`} alt={platform} />
                    </S.ImageInner>
                </S.ImageWrapper>

                <S.Description order={platform === 'ps' ? -1 : 0}>
                    <S.EditionList>{EditionElements}</S.EditionList>
                    <Button
                        title="buy now"
                        color="secondary"
                        size="small"
                        callback={() => onClickBuyNow(`${platform} edition`, data.price)}
                    />
                </S.Description>
            </FlexContainer>
        </S.ExploreItem>
    )
}
