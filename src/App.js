import style from './App.module.css';
import { Hero } from './components/hero/Hero';
import { Footer } from './components/footer/Footer';
import { TicketsList } from './components/tickets-list/TicketsList';

function App() {
  return (
    <div className={style.app}>
      <Hero />
      <TicketsList />
      <Footer />
    </div>
  );
}

export default App;
