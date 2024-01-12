import Container from '@/components/Container';
import NotificationsClient from './NotificationsClient';

const Notifications = () => {
  return (
    <>
      <Container>
        <NotificationsClient date={new Date()} />
      </Container>
    </>
  );
};

export default Notifications;
