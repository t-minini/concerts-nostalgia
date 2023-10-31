import style from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { ConcertsList } from './components/ConcertsList/ConcertsList';

function App() {
  return (
    <div className={style.app}>
      <Hero />
      <ConcertsList />
      <Footer />
    </div>
  );
}

export default App;
