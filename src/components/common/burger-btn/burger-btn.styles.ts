import styled from 'styled-components'

type Props = {
    active: boolean
}

export const StyledBurgerBtn = styled.button<Props>`
    width: 25px;
    height: 16px;
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 100;

    & > span {
        width: ${props => (props.active ? '12px' : '25px')};
        height: 2px;
        display: block;
        position: relative;
        background: ${props => props.theme.colors.white};
        transition: width 0.2s ease-in-out;

        &:before,
        &:after {
            content: '';
            width: ${props => (props.active ? '25px' : '12px')};
            height: 2px;
            display: block;
            position: absolute;
            background: ${props => props.theme.colors.white};
            transition: width 0.2s ease-in-out;
        }

        &:before {
            top: -7px;
            left: 0;
        }

        &:after {
            top: 7px;
            left: 0;
        }
    }

    &:hover span {
        width: 12px;

        &:before,
        &:after {
            width: 25px;
        }
    }
`
