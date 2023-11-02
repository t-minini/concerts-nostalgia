import style from './ConcertsList.module.css';
import halsey from './../../assets/images/halsey-ticket.png';
import coldplay from './../../assets/images/coldplay-ticket.png';
import robyn from './../../assets/images/robyn-ticket.png';

export function ConcertsList() {
  return (
    <main className={style.concertsList}>
      <img src={halsey} alt="concert ticket" />
      <img src={coldplay} alt="concert ticket" />
      <img src={robyn} alt="concert ticket" />
    </main>
  );
}
