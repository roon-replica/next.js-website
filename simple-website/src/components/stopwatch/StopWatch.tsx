import React, { useState, useEffect } from 'react';

const StopWatch: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 0.01);
            }, 10);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval!);
        }
        return () => clearInterval(interval!);
    }, [isActive, seconds]);

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
        setLaps([]);
    };

    const recordLap = () => {
        setLaps([...laps, seconds]);
    };

    const splitLapsIntoColumns = (laps: number[], columnSize: number) => {
        const columns = [];
        for (let i = 0; i < laps.length; i += columnSize) {
            columns.push(laps.slice(i, i + columnSize));
        }
        return columns;
    };

    const columns = splitLapsIntoColumns(laps, 10);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-6">
            <div className="flex flex-col items-center mb-8 w-full">
                <div className="text-9xl font-bold mb-4">{seconds.toFixed(2)}s</div>
                <div className="flex space-x-4">
                    <button
                        className={`btn btn-lg ${isActive ? 'btn-warning' : 'btn-success'}`}
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button className="btn btn-lg btn-info" onClick={recordLap} disabled={!isActive}>
                        Lap
                    </button>
                    <button className="btn btn-lg btn-error" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
            <div className="w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-4">Laps</h2>
                <div className="flex space-x-4">
                    {columns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-2 flex-1">
                            {column.map((lap, lapIndex) => (
                                <li key={lapIndex} className="text-2xl p-2 bg-gray-100 rounded-lg shadow-md">
                                    {columnIndex * 10 + lapIndex + 1}. {lap.toFixed(2)}s
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StopWatch;