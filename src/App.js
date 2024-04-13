import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<HomePage />} />
        <Route path="/edit/:id" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
