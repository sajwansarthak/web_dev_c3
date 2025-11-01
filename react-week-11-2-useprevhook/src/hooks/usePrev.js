import { useState,useEffect,useRef } from "react";


export function usePrev(value){
    const ref = useRef();


    useEffect(function(){
        ref.current = value;//0
    },[value])

    return ref.current;//undefined

    //it returns first ,effect gets called later

}