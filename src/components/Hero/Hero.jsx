import { Link } from 'react-scroll';
import style from './Hero.module.css';
import heroImg from './../../assets/images/kelvin-moquete-image.jpg';

export function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>concerts nostalgia</h1>
        <p className={style.hero__text}>my live concerts journey, revisited</p>
      </div>
      <Link
        to="tickets"
        smooth={true}
        className={style['hero__arrow-container']}
      >
        <div className={style['hero__arrow-down']}></div>
        <div className={style['hero__arrow-down']}></div>
        <div className={style['hero__arrow-down']}></div>
      </Link>
      <div className={style['hero__copyright-container']}>
        <p className={style['hero__copyright-text']}>photography by&nbsp;</p>
        <a
          href="https://unsplash.com/@kelmoquete"
          target="_blank"
          rel="noreferrer"
          className={style['hero__copyright-link']}
        >
          Kelvin Moquete
        </a>
      </div>
      <img
        src={heroImg}
        alt="a crowd in a concert, during the night, with the main colors being orange and black"
        className={style.hero__image}
      />
    </section>
  );
}
