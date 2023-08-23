import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { AppContext, appData } from 'app/model'
import { Global, theme } from 'styles'
import { App } from 'app/ui/app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppContext.Provider value={appData}>
        <ThemeProvider theme={theme}>
            <Global />
            <App />
        </ThemeProvider>
    </AppContext.Provider>,
)
