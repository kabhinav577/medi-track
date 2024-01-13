'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { PiPillDuotone } from 'react-icons/pi';
import { BiInjection } from 'react-icons/bi';
import { TbMedicineSyrup } from 'react-icons/tb';
import { FaTablets } from 'react-icons/fa';
import { FaGlassWater } from 'react-icons/fa6';

interface MedicationDetailsProps {
  medication: any;
}

const MedicationDetails: React.FC<MedicationDetailsProps> = ({
  medication,
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between text-gray-700">
            {medication.name}
            {(medication.type === 'Pill' && (
              <PiPillDuotone size={32} color="#FD3D25" />
            )) ||
              (medication.type === 'Syrup' && (
                <TbMedicineSyrup size={32} color="red" />
              )) ||
              (medication.type === 'Injection' && (
                <BiInjection size={32} color="#0070f3" />
              )) ||
              (medication.type === 'Tablet' && (
                <FaTablets size={32} color="#0070f3" />
              )) ||
              (medication.type === 'Water' && (
                <FaGlassWater size={32} color="#0070f3" />
              ))}
          </CardTitle>
          <CardDescription>
            {medication.day}
            {(medication.time === 'Morning' && ' - 9:00 AM') ||
              (medication.time === 'Afternoon' && ' - 2:00 PM') ||
              (medication.time === 'Night' && ' - 9:00 PM')}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-base text-gray-600">{medication.dosage}</p>
          <p className="text-base text-gray-600">{medication.type}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default MedicationDetails;
