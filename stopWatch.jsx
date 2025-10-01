import React,{useState,useEffect,useRef} from 'react';

function StopWatch(){

  const [isRunning,setIsRunning]=useState(false);
  const [Timer,setTimer]=useState(0);
  const intervalRef=useRef(null);

  useEffect(()=>{
    if(isRunning){
      intervalRef.current=setInterval(()=>{
        setTimer(T=>T+1);
      },10);
    }else{
      clearInterval(intervalRef.current);
    }
  },[isRunning]);

  function handleStartTime(){
    setIsRunning(true);
  }

  function handleStopTimer(){
    setIsRunning(false);
  }
  function reset(){
    setIsRunning(false);
    setTimer(0);
  }
  function format(time){
    const Hours=Math.floor(time/(1000*60*60));
    const minutes=Math.floor(time/6000);
    const seconds=Math.floor((time%6000)/100);
    const milliseconds=time%100;
    return `${Hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        <button onClick={handleStartTime}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
        <button onClick={reset}>reset</button>
      </div>
      <p>{format(Timer)}</p>
    </div>
  );
}
export default StopWatch;