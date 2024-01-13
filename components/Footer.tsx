/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" bg-gray-100 mt-20">
      <div className="w-full mx-auto text-gray-700 px-8 md:px-12 py-4">
        <div className="flex flex-col md:flex-row items-start md:gap-12 gap-4 justify-start">
          <div className="p-4">
            <h3 className="text-2xl md:text-3xl mb-3">
              {' '}
              Download our{' '}
              <strong className="text-rose-500">Medi-Tracker</strong> app{' '}
            </h3>
            <p className="text-gray-500"> Stay Healthy! All day, every day. </p>
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex items-center w-auto rounded-lg px-4 py-2 mx-2 my-2 bg-gray-900">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Image"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base text-gray-300">
                  {' '}
                  Google Play Store{' '}
                </p>
              </div>
            </div>
            <div className="flex items-center w-auto rounded-lg px-4 py-2 mx-2 bg-gray-900">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Image"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base text-gray-300">
                  {' '}
                  Apple Store{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-700">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            {' '}
            &copy; Medi-Tracker, 2024.{' '}
          </p>
          <div className="order-1 md:order-2 cursor-pointer">
            <span className="px-2" onClick={() => router.push('/about')}>
              About us
            </span>
            <span
              className="px-2 border-l cursor-pointer"
              onClick={() => router.push('/contact')}
            >
              Contact us
            </span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
