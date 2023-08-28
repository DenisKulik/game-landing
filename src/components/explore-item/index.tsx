import { ChangeEvent } from 'react'
import { EditionGame, PcEdition, Platform, PsEdition } from 'data'
import {
    Checkbox,
    ExploreTitle,
    CurrentEdition,
    StyledExploreItem,
    Switch,
    SwichControl,
    Knob,
    Image,
    ImageWrapper,
    Description,
    EditionList,
    EditionItem,
    ImageInner,
} from 'components/explore-item/explore-item.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { Button } from 'components/common/button'

type Props = {
    platform: Platform
    title: string
    img: string
    bgCard: string
    characteristics: string[]
    edition: EditionGame
    data: PcEdition | PsEdition
    onChangeCurrentEdition: (platform: Platform, checked: boolean) => void
}

export const ExploreItem = ({
    platform,
    title,
    img,
    bgCard,
    characteristics,
    edition,
    data,
    onChangeCurrentEdition,
}: Props) => {
    const EditionElements = Object.entries(data).map(([key, value], idx) => (
        <EditionItem key={idx}>
            <span>{key}</span>
            <span>: {value}</span>
        </EditionItem>
    ))

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeCurrentEdition(platform, e.currentTarget.checked)
    }

    return (
        <StyledExploreItem>
            <ExploreTitle>{title}</ExploreTitle>
            <Switch justify="center" align="center" gap="1.5rem">
                <CurrentEdition edition="min" current={edition}>
                    {characteristics[0]}
                </CurrentEdition>
                <SwichControl>
                    <Checkbox
                        onChange={onChangeChecked}
                        checked={edition === 'max'}
                        aria-label="switch-editions"
                    />
                    <Knob></Knob>
                </SwichControl>
                <CurrentEdition edition="max" current={edition}>
                    {characteristics[1]}
                </CurrentEdition>
            </Switch>

            <FlexContainer justify="center" gap="10rem" wrap="wrap">
                <ImageWrapper align="flex-end">
                    <ImageInner style={{ backgroundImage: `url(${bgCard})` }}>
                        <Image src={img} alt={platform} />
                    </ImageInner>
                </ImageWrapper>

                <Description order={platform === 'ps' ? -1 : 0}>
                    <EditionList>{EditionElements}</EditionList>
                    <Button title="buy now" color="secondary" size="small" />
                </Description>
            </FlexContainer>
        </StyledExploreItem>
    )
}
