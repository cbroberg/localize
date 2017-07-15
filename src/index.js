import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TranslationProvider from './TranslationProvider'
import registerServiceWorker from './registerServiceWorker'

const locale = window.locale || 'en'
const messages = {
    "hello_name": "Hello, %{name}.",
    "num_cars": "%{smart_count} car |||| %{smart_count} cars",
    "login": "",
}

ReactDOM.render(
    <TranslationProvider locale={locale} messages={messages}>
        <App />
    </TranslationProvider>, document.getElementById('root'))
    registerServiceWorker()
