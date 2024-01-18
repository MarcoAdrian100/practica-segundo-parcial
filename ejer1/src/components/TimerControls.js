import React from 'react';
import '../style/TimerControls.css';

const TimerControls = ({ start, stop, reset }) => {
  return (
    <div className="timer-controls">
      <button onClick={start} className="button button-start">
        Start
      </button>
      <button onClick={stop} className="button button-stop">
        Stop
      </button>
      <button onClick={reset} className="button button-reset">
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
