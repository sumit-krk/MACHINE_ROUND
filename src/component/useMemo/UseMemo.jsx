import { useMemo, useState } from "react";
import { findPrimes } from "../../utils";

const UseMemo=()=>{
    const [num, setNum]=useState(null);
    const [color, setColor]=useState(false);
    let prime=useMemo(()=>findPrimes(num),[num])
    console.log("prime", prime);
    const HandleInput=(e)=>{
        setNum(e.target.value);
    }
    return <>
        <div style={{height:'200px', width:'200px', border:'1px solid red', backgroundColor:color?"gray":"green"}}>
            <input type="number" onChange={HandleInput} />
            <div>{prime.length}</div>
            <button onClick={()=> setColor(!color)}>Click</button>
        </div>
    </>
}

export default UseMemo;