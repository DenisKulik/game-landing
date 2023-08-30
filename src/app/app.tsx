import { S } from 'app/app.styles.ts'
import { Header } from 'layout/header'
import { Main } from 'layout/sections/main'
import { Editions } from 'layout/sections/editions'
import { DualSense } from 'layout/sections/dual-sense'
import { About } from 'layout/sections/about'
import { Explore } from 'layout/sections/explore'
import { News } from 'layout/sections/news'
import { FAQ } from 'layout/sections/faq'
import { Footer } from 'layout/footer'
import { Modal } from 'components/common/modal'
import { Overlay } from 'components/common/overlay'
import { useState } from 'react'
import { GoTopBtn } from 'components/common/go-top-btn'

export const App = () => {
    const [isOpenedModal, setIsOpenedModal] = useState(false)
    const [currentEdition, setCurrentEdition] = useState({
        edition: '',
        price: 0,
    })

    const onClickBuyNow = (edition: string, price: number) => {
        setCurrentEdition({ edition, price })
        setIsOpenedModal(true)
    }

    const onCloseModal = () => {
        setIsOpenedModal(false)
    }

    return (
        <S.App>
            <Overlay active={isOpenedModal} />
            <Header />
            <Main onClickBuyNow={onClickBuyNow} />
            <Editions onClickBuyNow={onClickBuyNow} />
            <DualSense onClickBuyNow={onClickBuyNow} />
            <About />
            <Explore onClickBuyNow={onClickBuyNow} />
            <News />
            <FAQ />
            <Footer />
            <Modal
                opened={isOpenedModal}
                currentEdition={currentEdition}
                onCloseModal={onCloseModal}
            />
            <GoTopBtn />
        </S.App>
    )
}
