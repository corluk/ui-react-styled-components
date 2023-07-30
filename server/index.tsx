import express from "express" 
import React from "react"
import ReactDomServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import HTML  from "./html"
import axios from "axios"
import Registry from "../src/app/utils/registry"
import {join} from "path"
import App from "../src/app/app"
const app = express() 
app.use( "/assets", express.static(join(__dirname,"assets")))

const template = (registry : string , url : string)=> {


return <html>
<head></head>
<body>
    <div id="app">
    <StaticRouter location={url}> 
        <App />
    </StaticRouter>
</div>
<div data-state={registry} id="state"></div>
<script src="/assets/bundle.js"></script>

</body>
</html>
}
app.get("*",async (req,res)=>{

    let proxy = process.env["NODE_PROXY"]
    
    if(process.env["NODE_ENV"] != "development"){

        
          proxy  = req.protocol +"://" +req.headers.host
    }   
    let host = new URL(proxy as string)
    
    let url = new URL(req.url,host)
    url.pathname = "/api/test"
    
    
    const resp = await axios.get(url.toString()) 
    if (resp.status != 200){
        res.redirect("/error")
        res.end()
    }
    Registry.set("homeState",resp.data)
    const Template = template(Registry.toJson(),req.url)
    const {pipe  }  = ReactDomServer.renderToPipeableStream(
        <>{template}</>
  
    , {
        onShellReady(){
            res.setHeader("content-type","text/html")
            pipe(res)
        }
    })
   
})

app.listen(9090,()=>{
    console.log(`listening 9090`)
})