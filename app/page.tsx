import Container from '@/components/Container';
import DateCarousel from '@/components/DateCarousel';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <DateCarousel />
    </Container>
  );
}
