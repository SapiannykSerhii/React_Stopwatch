import Stopwatch from "./components/Stopwatch/Stopwatch";
import Button from "./components/Button/Button";
import React, {useState} from "react";
import Container from "./components/Container/Container";

function App() {
  // Stan
  const [time, setTime] = useState({h: 0, m: 0, s:0, ms:.0});
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  }

  let upDatedH = time.h, upDatedM = time.m, upDatedS= time.s, upDateMs = time.ms;

  const run = () => {
    if(upDatedM === 60){
      upDatedH ++;
      upDatedM = 0;
    }
    if(upDatedS === 60){
      upDatedM ++;
      upDatedS =0
    }
    if(upDateMs === 100){
      upDatedS ++;
      upDateMs = 0
    }
    upDateMs++;
    return setTime({h: upDatedH, m: upDatedM, s: upDatedS, ms: upDateMs})
  }

  const pause = () => {
    clearInterval(interv);
  }

  const reset = () =>{
    clearInterval(interv)
    return setTime({h: 0, m: 0, s: 0, ms: 0})
  }

  return (
    <Container>

     <Stopwatch time={time}/>
     <Button start={start} pause={pause}  reset={reset}/>

    </Container>
  )
}

export default App;
