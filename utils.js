import { toast } from "react-toastify";

export const handlesuccess = (msg)=>{
    toast.success(msg,{
        position: "bottom-right"
    })
}


export  const  handleerror = (msg)=>{
    toast.error(msg,{
        position: "bottom-right"
    })  
}

