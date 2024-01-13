'use client';

import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarClockWidget = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(new Date());
  const [clockValue, setClockValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setClockValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Calendar onChange={setCalendarValue} value={calendarValue} />
      <Clock value={clockValue} />
    </div>
  );
};

export default CalendarClockWidget;
