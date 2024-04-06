import style from './TicketsList.module.css';

export function TicketsList() {
  return (
    <section id="tickets" className={style.tickets}>
      <h2 className={style.tickets__title}>concerts</h2>
      <hr className={style['tickets__break']} />
      <div className={style.tickets__container}>
        <div className={style['tickets__container-info']}>
          <p className={style['tickets__container-tour']}>
            a head full of dreams tour
          </p>
          <p className={style['tickets__container-artist']}>coldplay</p>
          <p className={style['tickets__container-rate']}>
            &#11088;&nbsp;&nbsp;&#11088;&nbsp;&nbsp;&#11088;&nbsp;&nbsp;&#11088;&nbsp;&nbsp;&#11088;
          </p>
          <p className={style['tickets__container-venue']}>
            Croke Park Stadium
          </p>
          <div className={style['tickets__container-city-country']}>
            <p className={style['tickets__container-city']}>Dublin,&nbsp;</p>
            <p className={style['tickets__container-country']}>Ireland</p>
          </div>
          <p className={style['tickets__container-date']}>September 20, 2018</p>
        </div>
      </div>
      <a className={style.tickets__btn} href="/">
        add new
      </a>
    </section>
  );
}
