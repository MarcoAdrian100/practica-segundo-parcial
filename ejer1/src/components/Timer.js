import React, { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import '../style/Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }

  function stop() {
    setIsActive(false);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <div className="time">
        {Math.floor(seconds / 60)} mins {seconds % 60} secs
      </div>
      <TimerControls start={start} stop={stop} reset={reset} />
    </div>
  );
};

export default Timer;
