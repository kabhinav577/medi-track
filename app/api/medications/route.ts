import { NextResponse } from 'next/server';
import { medications } from '@/data/index.js';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date');

  if (!date) {
    return NextResponse.json({
      error: 'Date parameter is missing.',
    });
  }

  // Replace this with your actual medication data retrieval logic

  // Simulate fetching medication data for the selected date
  // const filteredMedications = medications.filter(
  //   (med) => med.time.toLowerCase() === date.toLowerCase()
  // );

  return NextResponse.json(medications);
}
