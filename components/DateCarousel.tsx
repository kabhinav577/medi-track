'use client';

// components/DateCarousel.tsx
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface DateCarouselProps {}

const weekName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateCarousel: React.FC<DateCarouselProps> = ({}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (offset: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + offset);
    setCurrentDate(newDate);
  };

  const formattedDate = (date: Date) => {
    const day = date.getDate();
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = weekName[date.getDay()];
    return `${day} ${month} ${year}, ${weekDay}`;
  };

  return (
    <div className="flex items-center justify-between w-full px-4 bg-gray-50">
      <button
        onClick={() => handleDateChange(-1)}
        className=" hover:bg-gray-200 p-2 rounded-full focus:outline-none"
      >
        <FaAngleLeft />
      </button>
      <div className="text-gray-600 text-lg font-semibold">
        {formattedDate(currentDate)}
      </div>
      <button
        onClick={() => handleDateChange(1)}
        className=" hover:bg-gray-200 p-2 rounded-full focus:outline-none"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default DateCarousel;
