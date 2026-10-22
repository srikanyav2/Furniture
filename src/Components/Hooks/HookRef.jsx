import React,{useRef,useEffect} from "react";
 const HookRef=()=>{
    const qtyRef=useRef();

    const increment =() => {
        qtyRef.current.value++
    }

    useEffect(()=>{
        console.log("component rerendered")
    })
    return(
        <>
        <div className="container">

            <input type="text" ref={qtyRef} placeholder="enter your name"></input>
            <button onClick={increment}>+</button>

        </div>
        </>
    )
 }


 export default HookRef;

