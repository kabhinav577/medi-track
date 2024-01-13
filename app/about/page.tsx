/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Container from '@/components/Container';
import { FaRegHandPointRight } from 'react-icons/fa';

const features = [
  'Personalized Health Insights',
  'Medication Reminders',
  'Physical Activity Tracking',
  'Nutrition Tracking',
  'Mental Health Tracking',
];

const benefits = [
  'Improved overall health and well-being',
  'Enhanced awareness of your health status',
  'Better management of medications and health routines',
  'Access to expert advice at your fingertips',
  'Personalized guidance for a healthier lifestyle',
];

const About = () => {
  return (
    <Container>
      <div className="w-full mx-auto py-8 px-4">
        <h1 className="text-4xl text-center text-gray-700 font-bold mb-8">
          About{' '}
          <strong className="text-rose-500 underline">Medi-Tracker</strong>
        </h1>
        <p className="text-base mb-6 text-justify">
          Welcome to <strong className="underline">Medi-Tracker</strong>, a
          revolutionary health and wellness application designed specifically
          for individuals aged 65 and above. Our mission is to empower seniors
          like Sunita Sharma to lead healthier, more fulfilling lives through
          the use of cutting-edge technology.
        </p>

        <div className="flex flex-col justify-start md:justify-around items-start md:flex-row gap-8 my-8">
          <div>
            <h2 className="text-2xl text-start md:text-center text-gray-500 font-bold ">
              Key Features
            </h2>
            <ul className="my-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex justify-start text-sky-500 items-start gap-4 hover:text-sky-600"
                >
                  <FaRegHandPointRight className="text-rose-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-start md:text-center text-gray-500 font-bold">
              Benefits
            </h2>
            <ul className="my-2">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex justify-start text-sky-500 items-start gap-4 hover:text-sky-600"
                >
                  <FaRegHandPointRight className="text-rose-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-base text-gray-700 text-justify">
          At <strong>Medi-Tracker</strong>, we believe that age should never be
          a barrier to leading an active and healthy life. Join us on this
          journey towards wellness, and let's make every day a step towards a
          healthier and happier you!
        </p>
      </div>
    </Container>
  );
};

export default About;
