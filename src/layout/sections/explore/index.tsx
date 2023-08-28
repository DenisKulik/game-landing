import { useState } from 'react'
import { EditionGame, explore, PcEdition, Platform, PsEdition } from 'data'
import { ExploreHeading, StyledExplore } from 'layout/sections/explore/explore.styles.ts'
import { Container } from 'components/common/container'
import { ExploreItem } from 'components/explore-item'

export const Explore = () => {
    const [currentEdition, setCurrentEdition] = useState({
        pc: {
            edition: 'min' as EditionGame,
            data: explore.pc.min as PcEdition,
        },
        ps: {
            edition: 'min' as EditionGame,
            data: explore.ps.min as PsEdition,
        },
    })

    const onChangeCurrentEdition = (platform: Platform, checked: boolean) => {
        setCurrentEdition({
            ...currentEdition,
            [platform]: {
                ...currentEdition[platform],
                edition: checked ? 'max' : 'min',
                data: checked ? explore[platform].max : explore[platform].min,
            },
        })
    }

    const exploreItems = Object.values(explore).map((value, idx) => (
        <ExploreItem
            key={idx}
            platform={value.platform}
            title={value.title}
            img={value.img}
            bgCard={value.bgCard}
            onChangeCurrentEdition={(platform, checked) =>
                onChangeCurrentEdition(platform, checked)
            }
            characteristics={value.characteristics}
            edition={currentEdition[value.platform].edition}
            data={currentEdition[value.platform].data}
        />
    ))

    return (
        <StyledExplore>
            <Container>
                <ExploreHeading>Explore the God of War series</ExploreHeading>
                {exploreItems}
            </Container>
        </StyledExplore>
    )
}
