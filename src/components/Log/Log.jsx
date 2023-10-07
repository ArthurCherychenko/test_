import React from 'react';
import { useSelector } from 'react-redux';

const Log = () => {
    const log = useSelector((state) => state.timer.log);

    return (
        <div>
            <h2>Log</h2>
            <ul>
                {log.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default Log;

