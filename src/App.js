import React from 'react';
import { useDispatch } from 'react-redux';
import {Button, Layout, Typography} from 'antd';
import { clearLog } from './store/slice/timerSlice';
import TimerButton from '../src/components/TimerButton/TimerButton';
import Log from '../src/components/Log/Log';
import style from "./appStyles.module.scss"

const { Title } = Typography;

const App = () => {
  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(clearLog());
  };

  return (
      <Layout className={style.wrapper}>
        <Typography>
            <Title className={style.title}>Timer App</Title>
            </Typography>
        <TimerButton delay={1} button={1} />
        <TimerButton delay={2} button={2} />
        <TimerButton delay={3} button={3} />
        <Log />
        <Button type="primary" className={style.buttonClear} onClick={handleClearButtonClick}>Clear</Button>
      </Layout>
  );
};

export default App;