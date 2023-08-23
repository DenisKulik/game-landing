import {
    Discount,
    DualSenseDescr,
    DualSenseHeading,
    DualSenseImage,
    DualSenseInfo,
    GameName,
    ImageWrapper,
    Price,
    StyledDualSense,
} from 'layout/sections/dual-sense/dual-sense.styles.ts'
import { Container } from 'components/common/container'
import { FlexContainer } from 'components/common/flex-container'
import dual from 'assets/img/dual.png'
import { Button } from 'components/common/button'

export const DualSense = () => {
    return (
        <StyledDualSense>
            <Container>
                <DualSenseHeading>DualSense</DualSenseHeading>
                <FlexContainer justify="center" wrap="wrap" gap="15rem">
                    <DualSenseInfo>
                        <DualSenseDescr>
                            You can also buy an exclusive controller with the{' '}
                            <GameName>God of War Ragnarok</GameName> theme for PS5
                        </DualSenseDescr>
                        <DualSenseDescr>
                            If you purchase a controller and a game (any edition), you will receive
                            a <Discount>15%</Discount> discount on two items.
                        </DualSenseDescr>
                        <FlexContainer align="center" gap="3.3rem">
                            <Price>35.99$</Price>
                            <Button
                                title="buy dualsense with a game"
                                color="secondary"
                                size="big"
                            />
                        </FlexContainer>
                    </DualSenseInfo>
                    <ImageWrapper>
                        <DualSenseImage src={dual} alt="dual-sense" width="340" height="309" />
                    </ImageWrapper>
                </FlexContainer>
            </Container>
        </StyledDualSense>
    )
}
