import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
// import { AddPage } from './pages/AddPage';
import { AddConcert } from './components/add-concert/AddConcert';
// import { Hero } from './components/hero/Hero';
// import { Footer } from './components/footer/Footer';
// import { TicketsList } from './components/tickets-list/TicketsList';

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<AddConcert />}></Route>
        {/* <Route path="/" element={<EnterPage />}></Route> */}
        {/* <Route path="/edit/:id" element={<EditCardPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
