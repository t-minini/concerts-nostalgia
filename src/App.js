import style from './App.module.css';
import { Hero } from './components/hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Tickets } from './components/tickets/Tickets';

function App() {
  return (
    <div className={style.app}>
      <Hero />
      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
