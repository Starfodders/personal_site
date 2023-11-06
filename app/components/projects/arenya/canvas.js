'use client'
import React, { useRef, useEffect } from 'react';

const CanvasComponent = () => {
    const canvasRef = useRef(null);

    const rectangle = { x: 50, y: 50, width: 200, height: 100 };

    const isInsideRectangle = (x, y) => {
        return (
            x > rectangle.x &&
            x < rectangle.x + rectangle.width &&
            y > rectangle.y &&
            y < rectangle.y + rectangle.height
        );
    };

    const handleCanvasClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (isInsideRectangle(x, y)) {
            // Here you can define what happens when the rectangle is clicked
            alert('Rectangle clicked!');
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const drawRectangle = (context, highlight = false) => {
            context.fillStyle = highlight ? 'rgba(255, 255, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
            context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        };

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const image = new Image();
        image.src = '/arenya/worldmap.png';
        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            drawRectangle(context);
        };

        // Attach the click event listener
        canvas.addEventListener('click', handleCanvasClick);

        // Cleanup
        return () => {
            canvas.removeEventListener('click', handleCanvasClick);
        };
    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <canvas ref={canvasRef} className='w-10/12 h-full -z-20' />
        </div>
    );
};

export default CanvasComponent;
