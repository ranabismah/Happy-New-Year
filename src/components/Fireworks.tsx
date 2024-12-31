"use client";
import confetti from "canvas-confetti";
import { useEffect } from "react";

const FireworksDisplay = () => {
  useEffect(() => {
    const fireworkEffect = () => {
      const interval = setInterval(() => {
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { x: Math.random(), y: Math.random() - 0.2 }, // Random positions
        });
      }, 1000); // Trigger fireworks every second

      // Stop the fireworks after 20 seconds
      setTimeout(() => clearInterval(interval), 20000);
    };

    fireworkEffect(); // Trigger fireworks on page load
  }, []);

  return (
    <div className="absolute inset-0">
      <canvas
        id="fireworksCanvas"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      ></canvas>
    </div>
  );
};
export default FireworksDisplay;
