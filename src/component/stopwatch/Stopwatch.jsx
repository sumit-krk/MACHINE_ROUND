import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
    const [time, setTime]=useState(0);
    let stopwatchRef=useRef(0);
    let intervalRef=useRef(0);
    let needToResume=useRef(false);
    const handleStart=()=>{
        stopwatchRef.current=new Date().getTime() - time;
        intervalRef.current=setInterval(()=>{
            setTime(new Date().getTime() - stopwatchRef.current);
        },10) 
    }
    const handlePause=()=>{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }
    const handleReset=()=>{
        clearInterval(intervalRef.current);
        setTime(0);
    }
    const handleBlur=()=>{
        needToResume.current=!!intervalRef.current
        clearInterval(intervalRef.current);
    }
    const handleFocuse=()=>{
        if(needToResume.current){
            intervalRef.current=false;
            handleStart();
        }
    }
    useEffect(()=>{
        window.addEventListener("blur", handleBlur);
        window.addEventListener("focus", handleFocuse);

        return ()=>{
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("focus", handleFocuse);
        }
    },[time])
    const formateTime=()=>{
        const ms=Math.floor((time%1000) / 10).toString().padStart(2, '0');
        const s=Math.floor((time/1000)%60).toString().padStart(2, '0');
        const min=Math.floor((time/60000)%60).toString().padStart(2, '0');
        const hour=Math.floor(time/3600000).toString().padStart(2, '0');
        return `${hour}:${min}:${s}:${ms}`
    }
    return <div>
        stop watch
        <div>
            <div>{formateTime()}</div>
            <div>
                <button onClick={handleStart}>start</button>
                <button onClick={handlePause}>pause</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    </div>
}
export default Stopwatch;