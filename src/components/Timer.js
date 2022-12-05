import React from 'react'

const Timer = ({timerDays, timerHrs, timerMins, timerSecs}) => {

  return (

    <>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">

            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>

            <span>:</span>

            <section>
              <p>{timerHrs}</p>
              <small>Hours</small>
            </section>

            <span>:</span>

            <section>
              <p>{timerMins}</p>
              <small>Minutes</small>
            </section>

            <span>:</span>

            <section>
              <p>{timerSecs}</p>
              <small>Seconds</small>
            </section>
            
          </div>
        </section>
      </section>
    </>

  )
  
}

Timer.defaultProps = {
  timerDays: 10,
  timerHrs: 10,
  timerMins: 10,
  timerSecs: 10
}

export default Timer