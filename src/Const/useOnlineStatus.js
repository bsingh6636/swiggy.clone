import { useEffect, useState } from "react"



export const useOnlineStatus = () =>{
    const [useOnlineStatus , setuseOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("online", (event) => {
           
            setuseOnlineStatus(true)
          });
          window.addEventListener("offline", (event) => {
           
            setuseOnlineStatus(false)
          });
    },[])
    return useOnlineStatus;
}