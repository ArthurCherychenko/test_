import React from 'react';
import { useSelector } from 'react-redux';
import {Space, Typography} from "antd";
import style from "./logStyles.module.scss"

const { Title, Text } = Typography;

const Log = () => {
    const log = useSelector((state) => state.timer.log);

    return (
        <Space className={style.wrapper}>
            <Typography>
                <Title level={2} className={style.title}>Log</Title>
                <Text>
                    {log.map((entry, index) => (
                        <Text className={style.textLog} key={index}>{entry}</Text>
                    ))}
                </Text>
            </Typography>
        </Space>
    );
};

export default Log;

