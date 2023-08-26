import { createGlobalStyle } from 'styled-components'

export const theme: ThemeType = {
    colors: {
        primary: '#8856D9',
        secondary: '#FF4136',
        sea: '#A9C7C7',
        white: '#FFF',
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
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    scroll-behavior: smooth;
  }

  html {
    box-sizing: border-box;
    font-family: Rubik, Roboto, sans-serif;
    font-size: 62.5%; // 1 rem = 10px

    @media ${({ theme }) => theme.media.large} {
      font-size: 56.25%; // 1 rem = 9px
    }

    @media ${({ theme }) => theme.media.medium} {
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
