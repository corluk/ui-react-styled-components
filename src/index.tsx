import React from "react"
 

//import TodoComponent from "./features/todo/todo_component"
 
 
import { createRoot } from 'react-dom/client';
//import store from "./store"
//import {Provider} from "react-redux"
import reportWebVitals from '../test/resources/reportWebVitals';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom"
 
import i18n from "./app/locales/i18n";
import { hydrateRoot } from 'react-dom/client';
 
import App from "./app/app"; 

 i18n.emit("init") 
 /*/
const rootElement = document.getElementById("app")
 
const root = createRoot(rootElement!)
*
const rooReactDOM.hydrate(<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>,document.documentElement)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 */
const el = document.getElementById("app") as HTMLElement
const root= hydrateRoot(el,<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>)

//const root = ReactDOM.createPortal(
reportWebVitals();