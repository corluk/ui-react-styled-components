import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
 
 
import { atom, getDefaultStore, useAtom } from "jotai"
import {useHydrateAtoms} from "jotai/utils"
import Reg from "../../utils/registry"
const homeAtom = atom({value:"ok"})
const defaultValue = (): {value:string}=>{
    let value = {value:""}
    if (typeof window == "undefined"){
        value = Reg.get("homeState")
        console.log("server state", value)
    }else {
        const registry = Reg.fromJson() || {}
            console.log("registry", registry)
            value = registry.homeState
            console.log("client state" , value )

    }
 
    
    return value
}
const HomePage = ()=>{
    const [value,setValue] = useAtom(homeAtom)
    
    useHydrateAtoms([[homeAtom, defaultValue()]])
    const state = atom((get)=>{

        return get(homeAtom)
    })
    
    console.log("value" , value)
    return <>
         <div> This is home page {value.value} </div>
        <div>
            <Outlet />
        </div>
    </>
}

export default HomePage 