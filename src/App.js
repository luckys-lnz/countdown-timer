import './App.css';
import Timer from './components/Timer'
import { useState } from 'react';

function App() {

  const [timerDays, setTimerDays] = useState();

  const [timerHrs, setTimerHrs] = useState();

  const [timerMins, setTimerMins] = useState();

  const [timerSecs, setTimerSecs] = useState();

  return (

    <div className="App">

      <Timer timerDays={timerDays} timerHrs={timerHrs}
        
        timerMins={timerMins} timerSecs={timerSecs} />

    </div>
  );
}

export default App;
