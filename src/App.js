import { useEffect, useRef, useState } from "react";
import "./App.css";
import React from 'react'


function App() {
  const curref = useRef(null);
  const MoveCircle = {
    x:40,
    y:30,
    w:10,
    h:25,
    Ix:2,
    Iy:1,
    test:'top',
  }

  const MoveOptone = {
    x:50,
    y:50,
    w:10,
    h:25,
    Ix:2,
    Iy:1,
  }
  const [opt, setopt] = useState(1)
  useEffect(() => {
  const ctxobj = curref.current
  const ctx = ctxobj.getContext('2d')
  function Box(){
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(MoveOptone.x, MoveOptone.y, 10, 10);
  }

  function Box_green(){
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(MoveOptone.x, MoveOptone.y, 10, 10);
  }


  function ball()
  {
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.arc(MoveCircle.x,MoveCircle.y,10,0, Math.PI * 2);
    ctx.fill();
    ctx.save(); 
  }
  function ball_blue()
  {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(MoveCircle.x,MoveCircle.y,10,0, Math.PI * 2);
    ctx.fill();
    ctx.save(); 
  }

  // Box()
    
  function Moving(){
    
    ctx.clearRect(0, 0, ctxobj.width, ctxobj.height);
    
    //ball 
    if(MoveCircle.test == 'top'){
      ball()
    }
    if(MoveCircle.test == 'right'){
      Box()
    }
    if(MoveCircle.test == 'blue'){
      ball_blue()
    }
    if(MoveCircle.test == 'green'){
      Box_green()
    }

    // Moving Ball
    MoveCircle.x += MoveCircle.Ix
    MoveCircle.y += MoveCircle.Iy

    // 

    if(MoveCircle.x + 10 > ctxobj.width  || MoveCircle.x - 10 < 0 ){
      MoveCircle.Ix *= -1
    }
    if(MoveCircle.x + 10 > ctxobj.width ){
      MoveCircle.test = 'right'

    }
    if(MoveCircle.y + 10 > ctxobj.height ){
      MoveCircle.test = 'blue'
    }
    if(MoveCircle.x - 10 < 0){
      MoveCircle.test = 'green'
    }
    if(MoveCircle.y- 10 < 0){
      MoveCircle.test = 'top'

    }

    if(MoveCircle.y + 10 > ctxobj.height  || MoveCircle.y - 10 < 0 ){
      MoveCircle.Iy *= -1
    }
    // requestAnimationFrame(Moving)
    
  }

  function Movingone(){
    ctx.clearRect(0, 0, ctxobj.width, ctxobj.height);
    
  
    //ball 
    Box()

    // Moving Ball
    MoveOptone.x += MoveOptone.Ix
    MoveOptone.y += MoveOptone.Iy

    // 

    if(MoveOptone.x + 10 > ctxobj.width  || MoveOptone.x - 10 < 0 ){
      MoveOptone.Ix *= -1
    }
    if(MoveOptone.x + 10 > ctxobj.width ){
      // Box()
      // MoveOptone.y += MoveOptone.Ix
      // requestAnimationFrame(Box)

    }
    if(MoveCircle.y + 10 > ctxobj.height ){
      console.log("Bottom Wall")
    }
    if(MoveCircle.x - 10 < 0){
      console.log("Left Wall")
    }
    if(MoveCircle.y- 10 < 0){
      console.log("Top Wall")
    }

    if(MoveOptone.y + 10 > ctxobj.height  || MoveOptone.y - 10 < 0 ){
      MoveOptone.Iy *= -1
    }
    // requestAnimationFrame(Movingone)
    
  }


  function Start(){
    Movingone()
    Moving()
    requestAnimationFrame(Start)

  }
  Start()
  console.log("🚀 ~ file: App.js ~ line 41 ~ Moving ~ opt", opt)

  }, [opt])
  return (
    <div className="App">
      <h2>Canvas Example</h2>
      <canvas ref={curref} id="canvas" className="Canvas"></canvas>
    </div>
  );
}

export default App;
