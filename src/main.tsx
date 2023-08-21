import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { Global, theme } from 'global.styles.ts'
import { App } from 'app/app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <Global />
        <App />
    </ThemeProvider>,
)
