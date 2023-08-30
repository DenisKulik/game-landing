import {
    Check,
    CheckboxContainer,
    CheckLabel,
    Form,
    FormGroup,
    Input,
    Label,
    ModalCheckbox,
    ModalClose,
    ModalDescription,
    ModalEdition,
    ModalHeader,
    ModalTitle,
    StyledModal,
    SummaDescription,
    TotalSumma,
} from 'components/common/modal/modal.styles.ts'
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
        <StyledModal
            opened={opened ? opened.toString() : undefined}
            style={{ backgroundImage: `url(${modal})` }}
        >
            <ModalClose onClick={onCloseModal}>x</ModalClose>
            <ModalHeader>
                <ModalTitle>God of War Ragnarök</ModalTitle>
                <ModalEdition>{edition}</ModalEdition>
            </ModalHeader>
            <Form>
                <FormGroup>
                    <Label htmlFor="card">credit card:</Label>
                    <Input id="card" name="card" required placeholder="0000 0000 0000 0000" />
                </FormGroup>
                <FlexContainer justify="space-between" gap="1rem">
                    <FormGroup>
                        <Label htmlFor="expire">expire:</Label>
                        <Input id="expire" name="expire" required placeholder="mm/yy" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cvv">cvv:</Label>
                        <Input type="password" name="cvv" id="cvv" required placeholder="***" />
                    </FormGroup>
                </FlexContainer>
                <FormGroup>
                    <Label htmlFor="instant">instant:</Label>
                    <Input id="instant" name="instant" required placeholder="enter instant" />
                </FormGroup>
                <CheckboxContainer as={FormGroup} gap="1.2rem" align="center">
                    <ModalCheckbox type="checkbox" id="agreement" name="agreement" required />
                    <Check></Check>
                    <CheckLabel htmlFor="agreement">
                        I agree with the <span>rules</span> of the site
                    </CheckLabel>
                </CheckboxContainer>
                <ModalDescription>
                    Download of this product is subject to the PlayStation Network Terms of Service
                    and our Software Usage Terms plus any specific additional conditions applying to
                    this product. If you do not wish to accept these terms, do not download this
                    product. See Terms of Service for more important information.
                </ModalDescription>
                <FlexContainer justify="space-between" align="center">
                    <SummaDescription>YOUR TOTAL SUMMA:</SummaDescription>
                    <TotalSumma>{price}$</TotalSumma>
                </FlexContainer>
                <Button type="submit" title="buy game" />
            </Form>
        </StyledModal>
    )
}
