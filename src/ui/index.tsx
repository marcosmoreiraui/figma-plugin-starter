import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";
import getTheme from "../functions/getTheme";

const theme = document?.getElementById('figma-style')?.innerHTML
const mode = getTheme(theme || 'light')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Theme appearance={mode}>
            <App/>
        </Theme>
    </React.StrictMode>
)
