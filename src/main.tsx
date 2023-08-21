import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Global, theme } from 'GlobalStyles.ts'
import { App } from 'App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>,
)
