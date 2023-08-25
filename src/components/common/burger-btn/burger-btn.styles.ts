import styled from 'styled-components'

type Props = {
    active: boolean
}

export const StyledBurgerBtn = styled.button`
    width: 25px;
    height: 16px;
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 100;

    &:hover > span {
        width: 12px;

        &::before,
        &::after {
            width: 25px;
        }
    }
`

export const Lines = styled.span<Props>`
    width: ${props => `${props.active ? 12 : 25}px`};
    height: 2px;
    display: block;
    position: relative;
    background: ${props => props.theme.colors.white};
    transition: width 0.2s ease-in-out;

    &::before,
    &::after {
      content: '';
      width: ${props => `${props.active ? 25 : 12}px`};
      height: 2px;
      display: block;
      position: absolute;
      background: ${props => props.theme.colors.white};
      transition: width 0.2s ease-in-out;
    }

    &::before {
      top: -7px;
      left: 0;
    }

    &::after {
      top: 7px;
      left: 0;
    }
  }
`
