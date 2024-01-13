'use client';

import MedicationDetails from '@/components/MedicationDetails';
import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa6';

interface NotificationsClientProps {
  date: Date;
}

const NotificationsClient: React.FC<NotificationsClientProps> = ({ date }) => {
  const [taken, setTaken] = useState(false);
  const [medications, setMedications] = useState([]);

  const morningMedication = medications.filter(
    (med: any) => med.time.toLowerCase() === 'morning'
  );

  const afternoonMedication = medications.filter(
    (med: any) => med.time.toLowerCase() === 'afternoon'
  );

  const nightMedication = medications.filter(
    (med: any) => med.time.toLowerCase() === 'night'
  );

  const time = new Date().getHours();

  const takeToggleButton = () => {
    setTaken(!taken);
  };

  useEffect(() => {
    // Fetch medications data based on the selected date
    // Replace the following with your actual API or data fetching logic
    const fetchData = async () => {
      try {
        // Assume there's an API endpoint that returns medication data
        const response = await fetch(`/api/medications?date=${date.getDay()}`);
        const data = await response.json();

        setMedications(data);
      } catch (error) {
        console.error('Error fetching medication data:', error);
      }
    };

    fetchData();
  }, [date]);
  return (
    <div className="mt-4 w-full h-auto flex flex-col gap-2 items-center justify-start">
      <h1 className="text-3xl font-bold flex justify-center items-center gap-2 text-gray-700">
        Notifications
        <FaBell className="text-rose-500" />
      </h1>
      <div className="w-[90%] flex flex-col md:flex-row md:flex-wrap items-center my-4 gap-2">
        {time <= 9 &&
          morningMedication.map((medication: any) => (
            <div
              key={medication.id}
              className="mb-2 w-full md:w-[45%] shadow-lg rounded-md"
            >
              <MedicationDetails medication={medication} />
              <div className="flex justify-between items-center px-4 py-2">
                <button className="text-yellow-500 hover:text-yellow-600 text-base font-medium">
                  Skip
                </button>
                <button
                  className="text-green-500 hover:text-green-600 text-base font-medium"
                  onClick={takeToggleButton}
                >
                  {taken ? 'Taken' : 'Take'}
                </button>
              </div>
            </div>
          ))}
        {time <= 14 &&
          afternoonMedication.map((medication: any) => (
            <div
              key={medication.id}
              className="mb-2 w-full md:w-[45%] shadow-lg rounded-md"
            >
              <MedicationDetails medication={medication} />
              <div className="flex justify-between items-center px-4 py-2">
                <button className="text-yellow-500 hover:text-yellow-600 text-base font-medium">
                  Skip
                </button>
                <button
                  className="text-green-500 hover:text-green-600 text-base font-medium"
                  onClick={takeToggleButton}
                >
                  {taken ? 'Taken' : 'Take'}
                </button>
              </div>
            </div>
          ))}
        {time <= 21 &&
          time > 14 &&
          nightMedication.map((medication: any) => (
            <div
              key={medication.id}
              className="mb-2 w-full md:w-[45%] shadow-lg rounded-md"
            >
              <MedicationDetails medication={medication} />
              <div className="flex justify-between items-center px-4 py-2">
                <button className="text-yellow-500 hover:text-yellow-600 text-base font-medium">
                  Skip
                </button>
                <button
                  className="text-green-500 hover:text-green-600 text-base font-medium"
                  onClick={takeToggleButton}
                >
                  {taken ? 'Taken' : 'Take'}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotificationsClient;
