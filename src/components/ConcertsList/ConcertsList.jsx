import style from './ConcertsList.module.css';
import robyn from './../../assets/images/robyn-ticket.png';
import halsey from './../../assets/images/halsey-ticket.png';
import coldplay from './../../assets/images/coldplay-ticket.png';

export function ConcertsList() {
  return (
    <main id="tickets" className={style.concertsList}>
      <img src={halsey} alt="concert ticket" />
      <img src={coldplay} alt="concert ticket" />
      <img src={robyn} alt="concert ticket" />
    </main>
  );
}
