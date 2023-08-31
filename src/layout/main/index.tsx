import { Home } from 'layout/sections/home'
import { Editions } from 'layout/sections/editions'
import { DualSense } from 'layout/sections/dual-sense'
import { About } from 'layout/sections/about'
import { Explore } from 'layout/sections/explore'
import { News } from 'layout/sections/news'
import { FAQ } from 'layout/sections/faq'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const Main = ({ onClickBuyNow }: Props) => {
    return (
        <main>
            <Home onClickBuyNow={onClickBuyNow} />
            <Editions onClickBuyNow={onClickBuyNow} />
            <DualSense onClickBuyNow={onClickBuyNow} />
            <About />
            <Explore onClickBuyNow={onClickBuyNow} />
            <News />
            <FAQ />
        </main>
    )
}
