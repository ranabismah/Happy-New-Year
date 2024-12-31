"use client";
import FireworksDisplay from "@/components/Fireworks";
import ThemeToggle from "@/components/ToggleTheme";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(5); // Initial countdown time in seconds
  const [showMessage, setShowMessage] = useState(false); // State to show the "Happy New Year" message

  useEffect(() => {
    // Countdown timer effect
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Clean up the interval when the component is unmounted
    } else {
      // When the countdown reaches 0, show the "Happy New Year!" message and trigger fireworks
      setShowMessage(true);
    }
  }, [timeLeft]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-pink-200 dark:bg-black text-black dark:text-white">
      {/* Theme Toggle button */}
      <ThemeToggle />

      {/* Countdown timer */}
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold">New Year Countdown</h1>
        <div className="text-4xl mt-5">
          <p>{timeLeft > 0 ? timeLeft : "Happy New Year!"}</p>
        </div>

        {/* Display the "Happy New Year!" message after countdown */}
        {showMessage && (
          <div className="mt-5">
            <h2 className="text-5xl font-extrabold text-center text-pink-900">
              Happy New Year!
              
            </h2>
            <p  className="text-xl font-bold text-center text-pink-900">"Wishing you a year ahead filled with love, adventure, and the fulfillment of all your heart's desires."</p>
          </div>
        )}
      </div>

      {/* Fireworks Display. */}
      {showMessage && <FireworksDisplay />}
    </div>
  );
};

export default HomePage;
