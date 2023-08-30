import styled from 'styled-components'

type LinesProps = {
    active?: string
}

const BurgerBtn = styled.button`
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

const Lines = styled.span<LinesProps>`
    width: ${({ active }) => (active ? 12 : 25)}px;
    height: 2px;
    display: block;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    transition: width 0.2s ease-in-out;

    &::before,
    &::after {
      content: '';
      width: ${({ active }) => `${active ? 25 : 12}px`};
      height: 2px;
      display: block;
      position: absolute;
      background: ${({ theme }) => theme.colors.white};
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

export const S = {
    BurgerBtn,
    Lines,
}
