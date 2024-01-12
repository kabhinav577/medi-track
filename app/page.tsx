import Container from '@/components/Container';
import DateCarousel from '@/components/DateCarousel';
import MedicationSchedule from '@/components/MedicationSchedule';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <DateCarousel />
      <MedicationSchedule date={new Date()} />
    </Container>
  );
}
