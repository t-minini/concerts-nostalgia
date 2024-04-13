import { Hero } from '../components/hero/Hero';
import { TicketsList } from '../components/tickets-list/TicketsList';
import { Footer } from '../components/footer/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <TicketsList />
      <Footer />
    </>
  );
}
