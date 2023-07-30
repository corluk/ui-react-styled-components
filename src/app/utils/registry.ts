

const  reg = ()=>{

    let _url : URL | null = null 
    let properties = {} as any 
    return {
         
        set : (key:string , value : any)=>{
            properties[key] = value
        },
        get  : <T>(key:string) : T=>{

            return properties[key] as T 
        }   ,
        toJson: ()=> JSON.stringify(properties),
        fromJson : () => {
            
            if(typeof window != "undefined" ){
                console.log("is there window ? ", typeof window)
                const state = document.getElementById("state") as HTMLElement
                const stateJSON = state.getAttribute("data-state") as string
                console.log("stateJson",stateJSON)
                try {
                   const obj = JSON.parse(stateJSON)  
                   console.log("obj",obj)
                   return obj 
                } catch (error) {
                    return {}      
                } 
                
            }
        } 
    }
}   
const Reg = reg()

Object.freeze(Reg)
export default Reg 