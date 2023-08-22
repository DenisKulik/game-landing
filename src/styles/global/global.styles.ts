import { createGlobalStyle } from 'styled-components'

export const theme: ThemeType = {
    colors: {
        primary: '#8856D9',
        secondary: '#FF4136',
        sea: '#A9C7C7',
        white: '#FFF',
        black: '#000',
        grey: '#8C96A0',
        darkgrey: '#30373F',
        background: '#1B1F22',
    },
    media: {
        large: '(max-width: 1200px)',
        medium: '(max-width: 900px)',
        small: '(max-width: 600px)',
    },
}

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: Rubik, Roboto, sans-serif;
    font-size: 62.5%; // 1 rem = 10px

    @media ${props => props.theme.media.large} {
      font-size: 56.25%; // 1 rem = 9px
    }

    @media ${props => props.theme.media.medium} {
      font-size: 50%; // 1 rem = 8px
    }
  }
`

export type ThemeType = {
    colors: {
        primary: string
        secondary: string
        sea: string
        white: string
        black: string
        grey: string
        darkgrey: string
        background: string
    }
    media: {
        large: string
        medium: string
        small: string
    }
}
