import style from './Tickets.module.css';
import robyn from './../../assets/images/robyn-ticket.png';
import halsey from './../../assets/images/halsey-ticket.png';
import coldplay from './../../assets/images/coldplay-ticket.png';
// import { ConcertInfo } from '../ConcertInfo/ConcertInfo';

export function Tickets() {
  return (
    <section id="tickets" className={style.tickets}>
      <h2 className={style.tickets__title}>concerts</h2>
      <hr className={style['tickets__first-break']} />
      <div className={style.tickets__container}>
        {/* <ConcertInfo className={style.concertInfo} /> */}
        <img
          className={style.tickets__image}
          src={halsey}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={coldplay}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={robyn}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={halsey}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={coldplay}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={robyn}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={halsey}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={coldplay}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={robyn}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={halsey}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={coldplay}
          alt="concert ticket"
        />
        <img
          className={style.tickets__image}
          src={robyn}
          alt="concert ticket"
        />
      </div>
      <button className={style.tickets__btn}>
        <p className={style['tickets__btn-text']}>add new</p>
      </button>
      <hr className={style['tickets__second-break']} />
    </section>
  );
}
