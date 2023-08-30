import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { S } from './go-top-btn.styles.ts'

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false)
        })
    }, [])

    return (
        <>
            {showBtn && (
                <S.GoTopBtn onClick={() => scroll.scrollToTop({ duration: 0 })}>&#8593;</S.GoTopBtn>
            )}
        </>
    )
}
