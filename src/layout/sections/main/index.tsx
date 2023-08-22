import { Container } from 'components/common/container'
import { Button } from 'components/common/button'
import {
    MainWrapper,
    StyledMain,
    MainTitle,
    MainDescr,
    MainContainer,
} from 'layout/sections/main/main.styles.ts'

export const Main = () => {
    return (
        <StyledMain>
            <MainContainer as={Container}>
                <MainWrapper>
                    <MainTitle>God of War Ragnarök</MainTitle>
                    <MainDescr>
                        Taking place three years following the events of the previous game,
                        Fimbulwinter, a great winter that spans three summers, is drawing to a close
                        which will begin the prophesied Ragnarök.
                    </MainDescr>
                    <Button title="buy now" />
                </MainWrapper>
            </MainContainer>
        </StyledMain>
    )
}
