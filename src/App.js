import style from './App.module.css';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className={style.app}>
      <Hero />
    </div>
  );
}

export default App;
