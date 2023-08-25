import { useState } from 'react'

import { Container } from 'components/common/container'
import { StyledHeader } from 'layout/header/header.styles.ts'
import { NavBar } from 'components/common/nav-bar'
import { BurgerBtn } from 'components/common/burger-btn'
import { Timer } from 'components/timer'
import { FlexContainer } from 'components/common/flex-container'

export const Header = () => {
    const [isOpenedNav, setIsOpenedNav] = useState<boolean>(false)

    const onClickBurgerMenu = () => {
        setIsOpenedNav(!isOpenedNav)
    }

    return (
        <StyledHeader>
            <Container as={FlexContainer} justify="space-between" wrap="wrap">
                <FlexContainer align="flex-start" gap="5rem" wrap="wrap">
                    <BurgerBtn callback={onClickBurgerMenu} active={isOpenedNav} />
                    <NavBar visible={isOpenedNav} />
                </FlexContainer>
                <Timer />
            </Container>
        </StyledHeader>
    )
}
