import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [timeInput, setTimeInput] = useState("00:00:00");

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isTimerActive) {
            interval = setInterval(() => {
                setTimerSeconds((prevSeconds) => {
                    if (prevSeconds <= 0) {
                        if (timerMinutes > 0) {
                            setTimerMinutes((prevMinutes) => prevMinutes - 1);
                            return 59;
                        } else if (timerHours > 0) {
                            setTimerHours((prevHours) => prevHours - 1);
                            setTimerMinutes(59);
                            return 59;
                        } else {
                            clearInterval(interval!);
                            setIsTimerActive(false);
                            return 0;
                        }
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        } else if (!isTimerActive && (timerHours !== 0 || timerMinutes !== 0 || timerSeconds !== 0)) {
            clearInterval(interval!);
        }
        return () => clearInterval(interval!);
    }, [isTimerActive, timerHours, timerMinutes, timerSeconds]);

    const resetTimer = () => {
        setTimeInput("00:00:00");
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
        setIsTimerActive(false);
    };

    const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeInput(e.target.value);
        const [hrs, mins, secs] = e.target.value.split(":").map(Number);
        setTimerHours(hrs);
        setTimerMinutes(mins);
        setTimerSeconds(secs);
    };

    const calculateStrokeDashoffset = () => {
        const radius = 90;
        const circumference = 2 * Math.PI * radius;
        const totalDuration = timerHours * 3600 + timerMinutes * 60 + timerSeconds;
        const remainingTime = timerHours * 3600 + timerMinutes * 60 + timerSeconds;
        const progress = remainingTime / totalDuration;
        return circumference - progress * circumference;
    };

    const formatTime = () => {
        const hrs = timerHours.toString().padStart(2, '0');
        const mins = timerMinutes.toString().padStart(2, '0');
        const secs = timerSeconds.toString().padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-6">
            <h1 className="text-3xl font-bold mb-4">Timer</h1>
            <div className="gauge-container mb-4">
                <svg className="gauge" width="200" height="200">
                    <circle
                        className="gauge-bg"
                        cx="100"
                        cy="100"
                        r="90"
                        strokeWidth="20"
                    />
                    <circle
                        className="gauge-progress"
                        cx="100"
                        cy="100"
                        r="90"
                        strokeWidth="20"
                        strokeDasharray="565.48"
                        strokeDashoffset={calculateStrokeDashoffset()}
                    />
                </svg>
                <div className="text-4xl font-bold">{formatTime()}</div>
            </div>
            <div className="flex space-x-4">
                <button
                    className={`btn btn-lg ${isTimerActive ? 'btn-warning' : 'btn-success'}`}
                    onClick={() => setIsTimerActive(!isTimerActive)}
                >
                    {isTimerActive ? 'Pause' : 'Start'}
                </button>
                <button className="btn btn-lg btn-error" onClick={resetTimer}>
                    Reset
                </button>
            </div>
            <div className="mt-4">
                <input
                    type="text"
                    className="input input-bordered w-40"
                    value={timeInput}
                    onChange={handleTimeInputChange}
                    placeholder="HH:MM:SS"
                />
            </div>
            <style jsx>{`
                .gauge-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .gauge {
                    transform: rotate(-90deg);
                }
                .gauge-bg {
                    fill: none;
                    stroke: #e6e6e6;
                }
                .gauge-progress {
                    fill: none;
                    stroke: #333;
                    transition: stroke-dashoffset 0.1s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Timer;