import { Fade } from 'react-awesome-reveal'

import { S } from 'layout/sections/dual-sense/dual-sense.styles.ts'
import { Container } from 'components/common/container'
import { FlexContainer } from 'components/common/flex-container'
import dual from 'assets/img/dual.webp'
import { Button } from 'components/common/button'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const DualSense = ({ onClickBuyNow }: Props) => {
    return (
        <S.DualSense id="controller">
            <Container>
                <S.DualSenseHeading>DualSense</S.DualSenseHeading>
                <S.DualSenseWrapper justify="center" gap="15rem">
                    <Fade direction="left" duration={600} triggerOnce={true}>
                        <S.DualSenseInfo>
                            <S.DualSenseDescription>
                                You can also buy an exclusive controller with the{' '}
                                <S.GameName>God of War Ragnarok</S.GameName> theme for PS5
                            </S.DualSenseDescription>
                            <S.DualSenseDescription>
                                If you purchase a controller and a game (any edition), you will
                                receive a <S.Discount>15%</S.Discount> discount on two items.
                            </S.DualSenseDescription>
                            <FlexContainer align="center" gap="3.3rem">
                                <S.Price>35.99$</S.Price>
                                <Button
                                    title="buy dualsense with a game"
                                    color="secondary"
                                    size="big"
                                    callback={() =>
                                        onClickBuyNow(
                                            'Controller with Digital Deluxe Edition',
                                            35.99,
                                        )
                                    }
                                />
                            </FlexContainer>
                        </S.DualSenseInfo>
                    </Fade>

                    <S.ImageWrapper duration={600} triggerOnce={true}>
                        <S.DualSenseImage src={dual} alt="dual-sense" width="340" height="309" />
                    </S.ImageWrapper>
                </S.DualSenseWrapper>
            </Container>
        </S.DualSense>
    )
}
