import { S } from 'app/app.styles.ts'
import { Header } from 'layout/header'
import { Footer } from 'layout/footer'
import { Modal } from 'components/common/modal'
import { useState } from 'react'
import { GoTopBtn } from 'components/common/go-top-btn'
import { Main } from 'layout/main'

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
            <Modal
                opened={isOpenedModal}
                currentEdition={currentEdition}
                onCloseModal={onCloseModal}
            />
            <Header />
            <Main onClickBuyNow={onClickBuyNow} />
            <Footer />
            <GoTopBtn />
        </S.App>
    )
}
