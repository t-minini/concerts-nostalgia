import style from './Tickets.module.css';
import robyn from './../../assets/images/robyn-ticket.png';
import halsey from './../../assets/images/halsey-ticket.png';
import coldplay from './../../assets/images/coldplay-ticket.png';
// import { ConcertInfo } from '../ConcertInfo/ConcertInfo';

export function Tickets() {
  return (
    <section id="tickets" className={style.tickets}>
      <h2>concerts</h2>
      <hr />
      <div className={style.tickets_container}>
        {/* <ConcertInfo className={style.concertInfo} /> */}
        <img src={halsey} alt="concert ticket" />
        <img src={coldplay} alt="concert ticket" />
        <img src={robyn} alt="concert ticket" />
        <img src={halsey} alt="concert ticket" />
        <img src={coldplay} alt="concert ticket" />
        <img src={robyn} alt="concert ticket" />
        <img src={halsey} alt="concert ticket" />
        <img src={coldplay} alt="concert ticket" />
        <img src={robyn} alt="concert ticket" />
        <img src={halsey} alt="concert ticket" />
        <img src={coldplay} alt="concert ticket" />
        <img src={robyn} alt="concert ticket" />
      </div>
      <button>
        <p>add new</p>
      </button>
      <hr />
    </section>
  );
}
