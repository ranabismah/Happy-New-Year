"use client";

import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      // Add dark mode to <html> element
      document.documentElement.classList.add("dark");
    } else {
      // Remove dark mode from <html> element
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-5 right-5 p-2 bg-gray-800 text-white rounded-md"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
