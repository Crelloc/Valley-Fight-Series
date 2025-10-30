
import React, { useState, useEffect, useCallback } from 'react';

interface CountdownTimerProps {
  target: { month: number, day: number, hour?: number };
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTargetDate = (target: { month: number, day: number, hour?: number }): Date => {
  const now = new Date();
  let targetYear = now.getFullYear();
  const targetDate = new Date(targetYear, target.month, target.day, target.hour || 0);

  if (now.getTime() > targetDate.getTime()) {
    targetYear += 1;
    return new Date(targetYear, target.month, target.day, target.hour || 0);
  }
  return targetDate;
};


const CountdownTimer: React.FC<CountdownTimerProps> = ({ target }) => {
  
  const getTargetDate = useCallback(() => calculateTargetDate(target), [target]);

  const [targetDate] = useState(getTargetDate());
  
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-4xl font-bebas text-green-500 tracking-wider">Event Is Live!</div>;
  }
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto">
      {timeUnits.map(unit => (
        <div key={unit.label} className="bg-gray-900/50 border border-gray-700 rounded-lg p-2 md:p-4 backdrop-blur-sm">
          <div className="text-3xl md:text-5xl font-bebas text-white">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm font-bebas text-red-500 tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;