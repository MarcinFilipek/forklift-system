import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { getMessages, Locale } from './i18n'

const root = createRoot(document.getElementById('root') as HTMLElement)

const language = navigator.language.split(/[-_]/)[0]

root.render(
    <React.StrictMode>
        <IntlProvider
            messages={getMessages(language as Locale)}
            locale={language}
            defaultLocale={Locale.English}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </React.StrictMode>
)
