import React, { useState, useEffect } from "react";

const SpinnerWithCountdown = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex justify-center items-center">
      <div className="relative">
        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-gray-700 text-sm text-primary">
          {countdown}
        </div>
      </div>
    </section>
  );
};

export default SpinnerWithCountdown;
