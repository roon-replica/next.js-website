import React, { useRef, useState, useEffect } from 'react';

const Drawing: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [thickness, setThickness] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.lineWidth = thickness;
                context.lineCap = 'round';
                context.strokeStyle = 'black';
            }
        }
    }, [thickness]);

    const startDrawing = (e: React.MouseEvent) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.beginPath();
                context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                setIsDrawing(true);
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
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-6">
            <h1 className="text-4xl font-bold mb-8">Draw Something</h1>
            <div className="mb-4 flex items-center">
                <button
                    onClick={resetCanvas}
                    className="px-4 py-2 bg-primary text-white rounded-lg mr-4"
                >
                    Reset
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
            </div>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="border border-gray-300"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    );
};

export default Drawing;