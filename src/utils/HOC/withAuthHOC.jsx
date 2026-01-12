import { useEffect } from "react"



const WithAuthHoc = (WrappedComponent)=>{
    return (props)=>{
        useEffect(()=>{
            const isLogin = localStorage.getItem('isLogin');
            

    },[])
    }
}