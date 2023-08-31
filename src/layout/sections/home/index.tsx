import { Button } from 'components/common/button'
import { S } from 'layout/sections/home/home.styles.ts'

type Props = {
    onClickBuyNow: (edition: string, price: number) => void
}

export const Home = ({ onClickBuyNow }: Props) => {
    return (
        <S.Main>
            <S.MainContainer>
                <S.MainWrapper>
                    <S.MainTitle>God of War Ragnarök</S.MainTitle>
                    <S.MainDescription>
                        Taking place three years following the events of the previous game,
                        Fimbulwinter, a great winter that spans three summers, is drawing to a close
                        which will begin the prophesied Ragnarök.
                    </S.MainDescription>
                    <Button
                        title="buy now"
                        callback={() => onClickBuyNow('standard edition', 19.99)}
                    />
                </S.MainWrapper>
            </S.MainContainer>
        </S.Main>
    )
}
