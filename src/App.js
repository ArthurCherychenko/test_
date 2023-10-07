import React from 'react';
import { useDispatch } from 'react-redux';
import { clearLog } from './store/slice/timerSlice';
import TimerButton from '../src/components/TimerButton/TimerButton';
import Log from '../src/components/Log/Log';

const App = () => {
  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(clearLog());
  };

  return (
      <div>
        <h1>Timer App</h1>
        <TimerButton delay={1} button={1} />
        <TimerButton delay={2} button={2} />
        <TimerButton delay={3} button={3} />
        <Log />
        <button onClick={handleClearButtonClick}>Clear</button>
      </div>
  );
};

export default App;