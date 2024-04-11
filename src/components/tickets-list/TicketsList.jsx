import style from './TicketsList.module.css';
import { useState, useEffect } from 'react';
import { api } from '../../api/concerts-nostalgia-api';

export function TicketsList() {
  const [concerts, setConcerts] = useState([
    {
      tour: '',
      artist: '',
      year: 0,
      location: '',
      city: '',
      country: '',
      rating: 0,
      background: '',
    },
  ]);

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const response = await api.get('/concerts/');
        setConcerts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchConcerts();
  }, []);

  const Rating = ({ rating }) => {
    const filledStars = Array.from({ length: rating }, (_, ratingIndex) => (
      <span key={ratingIndex} className={style['ticket__container-rate']}>
        &#11088;
      </span>
    ));

    const emptyStars = Array.from({ length: 5 - rating }, (_, ratingIndex) => (
      <span key={ratingIndex + rating} className={style['empty-star']}>
        &#9734;
      </span>
    ));

    return (
      <>
        {filledStars}
        {emptyStars}
      </>
    );
  };

  return (
    <section id="tickets" className={style.tickets}>
      <h2 className={style.tickets__title}>concerts</h2>
      <hr className={style['tickets__break']} />
      <div className={style.tickets__wrapper}>
        {concerts.map((currentConcert) => {
          return (
            <div
              className={`${style.ticket__container} ${
                style[currentConcert.background]
              }`}
              key={currentConcert.tour}
            >
              <div className={style['ticket__container-info']}>
                <p className={style['ticket__container-tour']}>
                  {currentConcert.tour}
                </p>
                <p className={style['ticket__container-artist']}>
                  {currentConcert.artist}
                </p>
                <Rating rating={currentConcert.rating} />
                <p className={style['ticket__container-venue']}>
                  {currentConcert.location}
                </p>
                <div className={style['ticket__container-city-country']}>
                  <p className={style['ticket__container-city']}>
                    {currentConcert.city},&nbsp;§
                  </p>
                  <p className={style['ticket__container-country']}>
                    {currentConcert.country}
                  </p>
                </div>
                <p className={style['ticket__container-date']}>
                  {currentConcert.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <a className={style.tickets__btn} href="/">
        add new
      </a>
    </section>
  );
}
