'use client';

import React, { useEffect, useState } from 'react';

interface NotificationsClientProps {
  date: Date;
}

const NotificationsClient: React.FC<NotificationsClientProps> = ({ date }) => {
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
    <div className="mt-4 w-full flex flex-col gap-4 items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-700">
        Medications Notifications
      </h2>
    </div>
  );
};

export default NotificationsClient;
