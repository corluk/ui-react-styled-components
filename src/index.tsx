import React from "react"
import ReactDOM from "react-dom"

//import TodoComponent from "./features/todo/todo_component"
import "./index.css"
 
import { createRoot } from 'react-dom/client';
//import store from "./store"
//import {Provider} from "react-redux"
import reportWebVitals from '../test/resources/reportWebVitals';
import { RouterProvider } from "react-router-dom";
 import Router from "./router"
 import "./index.css"
 import i18n from "../locales/i18n";
import "./index.css"
import { RecoilRoot } from "recoil";

 i18n.emit("init")
const rootElement = document.getElementById("app")
 
const root = createRoot(rootElement!)

root.render(<React.StrictMode>
    <RecoilRoot>      
                <RouterProvider router={Router} />
                </RecoilRoot>
</React.StrictMode>)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
 

//const root = ReactDOM.createPortal(
reportWebVitals();