import React, { useRef, useState, useEffect } from 'react';
import {BackspaceIcon, PencilIcon, RefreshIcon} from "@heroicons/react/solid";

const Drawing: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const [thickness, setThickness] = useState(2);
    const [eraseThickness, setEraseThickness] = useState(20);
    const [eraseColor, setEraseColor] = useState('white');
    const [history, setHistory] = useState<ImageData[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.lineWidth = isErasing ? eraseThickness : thickness;
                context.lineCap = 'round';
                context.strokeStyle = isErasing ? eraseColor : 'black';
            }
        }
    }, [thickness, eraseThickness, isErasing, eraseColor]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const bgColor = getComputedStyle(canvas).backgroundColor;
            setEraseColor(bgColor);
        }
    }, []);

    useEffect(() => {
        const handleUndo = (e: KeyboardEvent) => {
            if (e.metaKey && e.key === 'z') {
                undoLastMove();
            }
        };

        window.addEventListener('keydown', handleUndo);
        return () => {
            window.removeEventListener('keydown', handleUndo);
        };
    }, [history]);

    const startDrawing = (e: React.MouseEvent) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.beginPath();
                context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                setIsDrawing(true);
                saveHistory();
            }
        }
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                context.stroke();
            }
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const resetCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                setHistory([]);
            }
        }
    };

    const setDrawingMode = () => {
        setIsErasing(false);
    };

    const setErasingMode = () => {
        setIsErasing(true);
    };

    const saveHistory = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                setHistory((prevHistory) => [...prevHistory, imageData]);
            }
        }
    };

    const undoLastMove = () => {
        const canvas = canvasRef.current;
        if (canvas && history.length > 0) {
            const context = canvas.getContext('2d');
            if (context) {
                const lastImageData = history[history.length - 1];
                context.putImageData(lastImageData, 0, 0);
                setHistory((prevHistory) => prevHistory.slice(0, -1));
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-6">
            <h1 className="text-4xl font-bold mb-8">Draw!</h1>
            <div className="mb-4 flex items-center">
                <button
                    onClick={setDrawingMode}
                    className="px-4 py-2 bg-secondary text-white rounded-lg mr-4 flex items-center"
                    aria-label="Draw Mode"
                >
                    <PencilIcon className="w-6 h-6 mr-2"/>
                    Pencil
                </button>
                <button
                    onClick={setErasingMode}
                    className="px-4 py-2 bg-warning text-white rounded-lg mr-4 flex items-center"
                    aria-label="Erase Mode"
                >
                    <BackspaceIcon className="w-6 h-6 mr-2"/>
                    Erasure (cmd+z)
                </button>
                <button
                    onClick={resetCanvas}
                    className="px-4 py-2 bg-error text-white rounded-lg mr-4 flex items-center"
                    aria-label="Reset Canvas"
                >
                    <RefreshIcon className="w-6 h-6 mr-2"/>
                    Clear
                </button>
                <label className="mr-2">Thickness:</label>
                <input
                    type="range"
                    value={thickness}
                    onChange={(e) => setThickness(Number(e.target.value))}
                    className="px-2 py-1 border rounded-lg"
                    min="1"
                    max="20"
                />
                <span className="ml-2">{thickness}px</span>
                <label className="ml-4 mr-2">Eraser Size:</label>
                <input
                    type="range"
                    value={eraseThickness}
                    onChange={(e) => setEraseThickness(Number(e.target.value))}
                    className="px-2 py-1 border rounded-lg"
                    min="1"
                    max="30"
                />
                <span className="ml-2">{eraseThickness}px</span>
            </div>
            <canvas
                ref={canvasRef}
                width={1350}
                height={650}
                className="border border-gray-300 bg-base-100"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
};

export default Drawing;