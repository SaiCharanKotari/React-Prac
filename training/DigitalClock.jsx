import React,{useState,useEffect} from 'react';

function DigitalClock(){

  const [time,setTime]=useState(new Date());

  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date());
    },1000);
    return () =>{
      clearInterval(interval);
    }
  },[]);

  function formatTime(){
    let hours=time.getHours();
    let mins=time.getMinutes();
    let seconds=time.getSeconds();
    let meri=hours >=12 ?"PM":"AM" ;

    hours=hours%12 || 12;
    return `${padZero(hours)}:${padZero(mins)}:${padZero(seconds)} ${padZero(meri)}`;
  }
  function padZero(number){
    return (number<10 ?"0":"") + number;
  }
  return(
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;


// body{
//   background-image:url(assets/naruto-kakashi-hatake-lightning-purple-desktop-wallpaper.jpg);
//   background-attachment:fixed;
//   background-size:cover;
//   background-position:center;
//   background-repeat:no-repeat;
//   margin:0;

//   display:flex;
//   justify-content:center;
//   height:100vh;
//   align-items:center;
// }
// .clock{
//   color:white;
//   font-family:monospace;
//   font-size:6rem;
//   font-weight:bold;
//   text-align:center;
//   text-shadow:1px 1px 5px black;
//   width:100vw;

//   /* background-color:rgba(255, 255, 255, 0.133); */
//   backdrop-filter:blur(3.5px);
//   box-shadow:0 0 5px white;
// }