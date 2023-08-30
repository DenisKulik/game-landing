import styled from 'styled-components'
import { FlexContainer } from 'components/common/flex-container'

type StyledModalProps = {
    opened?: string
}

const Modal = styled.div<StyledModalProps>`
    max-width: 47rem;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 1rem 2rem;
    z-index: 999;
    opacity: ${({ opened }) => (opened ? 1 : 0)};
    visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
    background-color: ${({ theme }) => theme.colors.background};
    background-repeat: no-repeat;
    background-position: top;
    border-radius: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.darkgrey};
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;

    button {
        margin-top: 1.9rem;
        width: 100%;
    }
`

const ModalClose = styled.div`
    width: 15px;
    text-align: center;
    margin-left: auto;
    margin-bottom: 2rem;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`

const ModalTitle = styled.h3`
    margin-bottom: 1rem;
    color: #8856d9;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
`

const ModalEdition = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
`

const FormGroup = styled.div`
    margin-bottom: 1.7rem;
    width: 100%;
`

const Label = styled.label`
    display: block;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    text-transform: uppercase;
`

const Input = styled.input.attrs(({ type }) => ({
    type: type || 'text',
}))`
    width: ${({ type }) => (type === 'checkbox' ? 'auto' : 100)}%;
    padding: 1.4rem 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.darkgrey};
`

const CheckboxContainer = styled(FlexContainer)`
    margin-bottom: 1.7rem;
    position: relative;
`

const Check = styled.span`
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.darkgrey};
`

const ModalCheckbox = styled(Input)`
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    &:checked {
        & + span {
            &::before {
                content: '✔';
            }
        }
    }
`

const CheckLabel = styled(Label)`
    margin-bottom: 0;
    span {
        color: #ff4136;
        font-weight: 700;
        text-decoration-line: underline;
    }
`

const ModalDescription = styled.p`
    margin-bottom: 1.3rem;
    color: #d9d9d9;
    font-size: 1rem;
`

const SummaDescription = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`

const TotalSumma = styled.span`
    font-size: 2rem;
    font-weight: 500;
`

export const S = {
    Modal,
    ModalClose,
    ModalTitle,
    ModalEdition,
    FormGroup,
    Label,
    Input,
    CheckboxContainer,
    Check,
    ModalCheckbox,
    CheckLabel,
    ModalDescription,
    SummaDescription,
    TotalSumma,
}
