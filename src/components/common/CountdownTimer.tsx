import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../../utils/storage';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex justify-center space-x-3 ${className}`}>
      <div className="countdown-item bg-white bg-opacity-90 rounded-lg p-2 min-w-[70px] text-center shadow-md border border-white border-opacity-20">
        <div className="text-2xl font-bold text-gray-800">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs text-gray-600">Days</div>
      </div>
      <div className="countdown-item bg-white bg-opacity-90 rounded-lg p-2 min-w-[70px] text-center shadow-md border border-white border-opacity-20">
        <div className="text-2xl font-bold text-gray-800">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs text-gray-600">Hours</div>
      </div>
      <div className="countdown-item bg-white bg-opacity-90 rounded-lg p-2 min-w-[70px] text-center shadow-md border border-white border-opacity-20">
        <div className="text-2xl font-bold text-gray-800">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs text-gray-600">Minutes</div>
      </div>
      <div className="countdown-item bg-white bg-opacity-90 rounded-lg p-2 min-w-[70px] text-center shadow-md border border-white border-opacity-20">
        <div className="text-2xl font-bold text-gray-800">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs text-gray-600">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;