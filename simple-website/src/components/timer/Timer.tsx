import React, {useState, useEffect, useRef} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import alarmSound from "../../alarm.mp3";

const Timer: React.FC = () => {
    const [targetHour, setTargetHour] = useState<number>(0);
    const [targetMinute, setTargetMinute] = useState<number>(0);
    const [targetSecond, setTargetSecond] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [key, setKey] = useState<number>(0); // Add a key state to force re-render
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const alarmRef = useRef<HTMLAudioElement | null>(null);

    const handleTargetHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 0 && value < 24) {
            setTargetHour(value);
        }
    };

    const handleTargetMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 0 && value < 60) {
            setTargetMinute(value);
        }
    };

    const handleTargetSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 0 && value < 60) {
            setTargetSecond(value);
        }
    };

    const resetTimer = () => {
        setTargetHour(0);
        setTargetMinute(0);
        setTargetSecond(0);
        setIsPlaying(false);
        setKey(prevKey => prevKey + 1); // Increment key to force re-render

        if (alarmRef.current) {
            alarmRef.current.pause();
            alarmRef.current.currentTime = 0;
        }
    };

    const totalDuration = targetHour * 3600 + targetMinute * 60 + targetSecond;

    const formatTime = (remainingTime: number) => {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        if (remainingTime === 0 && isPlaying) {
            alarmRef.current = new Audio(alarmSound);
            alarmRef.current.play();
        }
    }, [remainingTime, isPlaying]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-6">
            <div className="mb-4 flex space-x-2">
                <div className="flex flex-col items-center">
                    <label htmlFor="hour" className="mb-1">Hour</label>
                    <input
                        id="hour"
                        type="number"
                        value={targetHour}
                        onChange={handleTargetHourChange}
                        min="0"
                        max="23"
                        className="input input-bordered w-24 text-center p-4"
                        placeholder="HH"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="minute" className="mb-1">Minute</label>
                    <input
                        id="minute"
                        type="number"
                        value={targetMinute}
                        onChange={handleTargetMinuteChange}
                        min="0"
                        max="59"
                        className="input input-bordered w-24 text-center p-4"
                        placeholder="MM"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="second" className="mb-1">Second</label>
                    <input
                        id="second"
                        type="number"
                        value={targetSecond}
                        onChange={handleTargetSecondChange}
                        min="0"
                        max="59"
                        className="input input-bordered w-24 text-center p-4"
                        placeholder="SS"
                    />
                </div>
            </div>
            <CountdownCircleTimer
                key={key} // Use key to force re-render
                isPlaying={isPlaying}
                duration={totalDuration}
                size={400}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[totalDuration, totalDuration * 0.75, totalDuration * 0.5, 0]}
                onComplete={() => setIsPlaying(true)}
            >
                {({ remainingTime }) => {
                    setRemainingTime(remainingTime);
                    return <div className="text-4xl font-bold">{formatTime(remainingTime)}</div>;
                }}
            </CountdownCircleTimer>
            <div className="mt-4">
                <button
                    className="btn btn-lg btn-success m-2"
                    onClick={() => setIsPlaying(true)}
                >
                    Start Timer
                </button>
                <button
                    className="btn btn-lg btn-error"
                    onClick={resetTimer}
                >
                    Reset Timer
                </button>
            </div>
        </div>
    );
};

export default Timer;