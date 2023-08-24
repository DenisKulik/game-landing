import { useState } from 'react'
import { explore, PcEdition, Platform, PsEdition } from 'data'
import { ExploreHeading, StyledExplore } from 'layout/sections/explore/explore.styles.ts'
import { Container } from 'components/common/container'
import { ExploreItem } from 'components/explore-item'

export const Explore = () => {
    const [currentEdition, setCurrentEdition] = useState({
        pc: {
            edition: 'EditionOne' as Edition,
            data: explore.pc.editionOne as PcEdition,
        },
        ps: {
            edition: 'EditionOne' as Edition,
            data: explore.ps.editionOne as PsEdition,
        },
    })

    const onChangeCurrentEdition = (platform: Platform, checked: boolean) => {
        setCurrentEdition({
            ...currentEdition,
            [platform]: {
                ...currentEdition[platform],
                edition: checked ? 'EditionTwo' : 'EditionOne',
                data: checked ? explore[platform].editionTwo : explore[platform].editionOne,
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

export type Edition = 'EditionOne' | 'EditionTwo'
