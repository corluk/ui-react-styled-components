import React from "react"
import { Route, Routes } from "react-router-dom"

const Html = ()=>{

    return <> 
          <html>
            <head>
              <title>Server Rendered App</title>
            </head>
            <body>
               
              <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/about" element={<div>About</div>} />
              </Routes>
              
              <script src="/assets/bundle.js" />
            </body>
          </html>
      </>
       
}


export default Html