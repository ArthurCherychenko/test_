import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToLog} from '../../store/slice/timerSlice';


const TimerButton = ({ delay, button }) => {
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(null);
    const handleButtonClick = () => {
        if (!timer) {
            const startTime =new Date().toLocaleTimeString();
            const runTimer = async () => {
                for (let i = 1; i <= delay; i++) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }
                const currentTime = new Date().toLocaleTimeString();
                dispatch(
                    addToLog(
                        `Button №${button}: ${currentTime} - ${startTime} (${delay} sec)`
                    )
                );
                setTimer(null);
            };
            setTimer(runTimer);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick} disabled={timer !== null}>
                {timer
                    ? `Timer is Running`
                    : `Start Timer ${delay} sec`}
            </button>
        </div>
    );
};

export default TimerButton;
