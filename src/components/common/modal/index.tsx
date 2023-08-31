import { S } from 'components/common/modal/modal.styles.ts'
import { FlexContainer } from 'components/common/flex-container'
import { Button } from 'components/common/button'
import modal from 'assets/img/modal.webp'

type Props = {
    opened: boolean
    currentEdition: {
        edition: string
        price: number
    }
    onCloseModal: () => void
}

export const Modal = ({
    opened = false,
    currentEdition: { edition, price },
    onCloseModal,
}: Props) => {
    return (
        <>
            <S.Overlay onClick={onCloseModal} opened={opened ? opened.toString() : undefined} />
            <S.Modal
                opened={opened ? opened.toString() : undefined}
                style={{ backgroundImage: `url(${modal})` }}
            >
                <S.ModalClose onClick={onCloseModal}>x</S.ModalClose>
                <div>
                    <S.ModalTitle>God of War Ragnarök</S.ModalTitle>
                    <S.ModalEdition>{edition}</S.ModalEdition>
                </div>
                <form>
                    <S.FormGroup>
                        <S.Label htmlFor="card">credit card:</S.Label>
                        <S.Input id="card" name="card" required placeholder="0000 0000 0000 0000" />
                    </S.FormGroup>
                    <FlexContainer justify="space-between" gap="1rem">
                        <S.FormGroup>
                            <S.Label htmlFor="expire">expire:</S.Label>
                            <S.Input id="expire" name="expire" required placeholder="mm/yy" />
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label htmlFor="cvv">cvv:</S.Label>
                            <S.Input
                                type="password"
                                name="cvv"
                                id="cvv"
                                required
                                placeholder="***"
                            />
                        </S.FormGroup>
                    </FlexContainer>
                    <S.FormGroup>
                        <S.Label htmlFor="instant">instant:</S.Label>
                        <S.Input id="instant" name="instant" required placeholder="enter instant" />
                    </S.FormGroup>
                    <S.CheckboxContainer as={S.FormGroup} gap="1.2rem" align="center">
                        <S.ModalCheckbox type="checkbox" id="agreement" name="agreement" required />
                        <S.Check></S.Check>
                        <S.CheckLabel htmlFor="agreement">
                            I agree with the <span>rules</span> of the site
                        </S.CheckLabel>
                    </S.CheckboxContainer>
                    <S.ModalDescription>
                        Download of this product is subject to the PlayStation Network Terms of
                        Service and our Software Usage Terms plus any specific additional conditions
                        applying to this product. If you do not wish to accept these terms, do not
                        download this product. See Terms of Service for more important information.
                    </S.ModalDescription>
                    <FlexContainer justify="space-between" align="center">
                        <S.SummaDescription>YOUR TOTAL SUMMA:</S.SummaDescription>
                        <S.TotalSumma>{price}$</S.TotalSumma>
                    </FlexContainer>
                    <Button type="submit" title="buy game" />
                </form>
            </S.Modal>
        </>
    )
}
