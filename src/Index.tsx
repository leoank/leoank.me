import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { LocationProvider } from '@reach/router'

import { RootContextProvider } from '@context/provider'
import { i18n } from './locales'
import { history } from './services/location/history'
import './styles/main.scss'

import { App } from './App'


ReactDOM.render(
    <React.StrictMode>
            <I18nextProvider i18n={i18n}>
                <LocationProvider history={history}>
                    <RootContextProvider>
                        <App />
                    </RootContextProvider>
                </LocationProvider>
            </I18nextProvider>
    </React.StrictMode>,
    document.querySelector('#root')
)
