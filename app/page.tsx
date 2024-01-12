import Container from '@/components/Container';
import DateCarousel from '@/components/DateCarousel';
import MedicationSchedule from '@/components/MedicationSchedule';

export default function Home() {
  return (
    <Container>
      <DateCarousel />
      <MedicationSchedule date={new Date()} />
    </Container>
  );
}
