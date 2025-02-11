import React, { useEffect, useRef } from "react";

const SpirographFractal = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = 500;
        canvas.height = 500;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        function drawSpirograph(cx, cy, R, r, O, numLoops = 1000, color = "blue") {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();

            for (let t = 0; t < numLoops; t++) {
                let theta = (t / numLoops) * Math.PI * 2 * r / R;
                let x = cx + (R - r) * Math.cos(theta) + O * Math.cos(((R - r) / r) * theta);
                let y = cy + (R - r) * Math.sin(theta) - O * Math.sin(((R - r) / r) * theta);
                if (t === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        function drawFractal(x, y, size, depth) {
            if (depth === 0) return;
            drawSpirograph(x, y, size, size / 4, size / 10, 500, `hsl(${depth * 50}, 100%, 50%)`);

            // Recursive fractal patterns
            drawFractal(x - size / 2, y, size / 2, depth - 1);
            drawFractal(x + size / 2, y, size / 2, depth - 1);
            drawFractal(x, y - size / 2, size / 2, depth - 1);
        }

        drawFractal(250, 250, 100, 4); // Start drawing fractal

    }, []);

    return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
};

export default SpirographFractal;
