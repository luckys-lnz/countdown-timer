import './App.css';
import Timer from './components/Timer'
import { useState, useEffect } from 'react';

function App() {

  const [timerDays, setTimerDays] = useState();

  const [timerHrs, setTimerHrs] = useState();

  const [timerMins, setTimerMins] = useState();

  const [timerSecs, setTimerSecs] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / (1000));
      
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHrs(hours);
        setTimerMins(minutes);
        setTimerSecs(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  })

  return (

    <div className="App">

      <Timer timerDays={timerDays} timerHrs={timerHrs}
        
        timerMins={timerMins} timerSecs={timerSecs} />

    </div>
  );
}

export default App;
