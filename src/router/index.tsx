import React from "react"; 
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/index/index"
import Routes from "./routes"
const router = createBrowserRouter(Routes)

export default router