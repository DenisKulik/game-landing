import { useState } from 'react'

import { Container } from 'components/common/container'
import { StyledHeader } from 'layout/header/header.styles.ts'
import { NavBar } from 'components/common/nav-bar'
import { BurgerBtn } from 'components/common/burger-btn'
import { Timer } from 'components/timer'
import { FlexContainer } from 'components/common/flex-container'

export const Header = () => {
    const [isOpenedNav, setIsOpenedNav] = useState(false)

    const onClickBurgerMenu = () => {
        setIsOpenedNav(!isOpenedNav)
    }

    return (
        <StyledHeader>
            <FlexContainer as={Container} justify="space-between">
                <FlexContainer align="flex-start" gap="5rem">
                    <BurgerBtn callback={onClickBurgerMenu} active={isOpenedNav} />
                    <NavBar isOpened={isOpenedNav} />
                </FlexContainer>
                <Timer />
            </FlexContainer>
        </StyledHeader>
    )
}
