import { useState } from 'react'
import { JackInTheBox } from 'react-awesome-reveal'

import { EditionGame, explore, PcEdition, Platform, PsEdition } from 'data'
import { ExploreItem } from 'components/explore-items/explore-item'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const ExploreItems = ({ onClickBuyNow }: Props) => {
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
            onClickBuyNow={onClickBuyNow}
        />
    ))

    return (
        <JackInTheBox duration={700} triggerOnce={true}>
            {exploreItems}
        </JackInTheBox>
    )
}
