import CalendarClockWidget from '@/components/CalendarClockWidget';
import Container from '@/components/Container';
import DateCarousel from '@/components/DateCarousel';
import MedicationSchedule from '@/components/MedicationSchedule';

export default function Home() {
  return (
    <Container>
      <DateCarousel />
      <h1 className="text-3xl text-center font-semibold text-rose-500">
        <strong>Medication Schedule</strong>
      </h1>
      <div className="w-full md:w-[85%] xl:w-full md:mx-auto relative">
        <div className="w-full xl:w-[70%] xl:flex xl:justify-start items-center">
          <MedicationSchedule date={new Date()} />
        </div>
        <div className="w-[25%] hidden absolute top-4 right-8 xl:flex flex-col items-center">
          <CalendarClockWidget />
        </div>
      </div>
    </Container>
  );
}
