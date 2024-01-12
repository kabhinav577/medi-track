'use client';

import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WiSunrise, WiDaySunny } from 'react-icons/wi';
import { GiNightSleep } from 'react-icons/gi';

interface MedicationScheduleProps {
  date: Date;
}

const MedicationSchedule: React.FC<MedicationScheduleProps> = ({ date }) => {
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
      <h1 className="text-2xl font-semibold text-rose-700">
        Medication Schedule
      </h1>
      <div className="w-full flex flex-col gap-8 items-center">
        {/* Morning Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full p-4 bg-slate-50 rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">
              <div className="flex items-center justify-center">
                <WiSunrise className="mr-2 text-rose-700" />
                <h2 className="text-gray-700 hover:text-sky-700">Morning</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {morningMedication &&
                morningMedication.map((medication: any) => (
                  <div key={medication.id} className="mb-2">
                    <strong>{medication.name}</strong> - Dosage:{' '}
                    {medication.dosage}, Day: {medication.day}
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Afternoon Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full p-4 bg-slate-50 rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">
              <div className="flex items-center justify-center">
                <WiDaySunny className="mr-2 text-yellow-700" />
                <h2 className="text-gray-700 hover:text-sky-700">Afternoon</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {afternoonMedication &&
                afternoonMedication.map((medication: any) => (
                  <div key={medication.id} className="mb-2">
                    <strong>{medication.name}</strong> - Dosage:{' '}
                    {medication.dosage}, Day: {medication.day}
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Night Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full p-4 bg-slate-50 rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-bold">
              <div className="flex items-center justify-center">
                <GiNightSleep className="mr-2 text-sky-700" />
                <h2 className="text-gray-700 hover:text-sky-700">Night</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {nightMedication &&
                nightMedication.map((medication: any) => (
                  <div key={medication.id} className="mb-2">
                    <strong>{medication.name}</strong> - Dosage:{' '}
                    {medication.dosage}, Day: {medication.day}
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default MedicationSchedule;