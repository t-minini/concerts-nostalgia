import style from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { ConcertsList } from './components/ConcertsList/ConcertsList';

function App() {
  return (
    <div className={style.app}>
      <Hero />
      <ConcertsList />
    </div>
  );
}

export default App;
