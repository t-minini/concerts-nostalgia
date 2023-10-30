import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';

import { EnterPage } from './pages/EnterPage/EnterPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
