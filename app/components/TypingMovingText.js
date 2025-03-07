"use client";
import { useEffect, useState } from "react";

const TypingMovingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCursor, setDisplayCursor] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    // If we haven't displayed all characters yet
    if (currentIndex < text.length) {
      // Set timeout to add the next character
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      // Cleanup function to clear timeout
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setDisplayCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  });

  return (
    <div className="text-2xl center-content">
      {displayedText}
      <span
        className={`center-self inline-block w-[2px] h-6 bg-white ml-1 ${
          displayCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default TypingMovingText;
