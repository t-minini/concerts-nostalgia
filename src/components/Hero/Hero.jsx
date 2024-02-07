import { Link } from 'react-scroll';
import style from './Hero.module.css';
import heroImg from './../../assets/images/kelvin-moquete-image.jpg';

export function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.text__container}>
        <h1>concerts nostalgia</h1>
        <p>my live concerts journey, revisited</p>
      </div>
      <Link to="tickets" smooth={true} className={style.arrow__container}>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
      </Link>
      <div className={style.photo__copyright}>
        photography by&nbsp;
        <a
          href="https://unsplash.com/@kelmoquete"
          target="_blank"
          rel="noreferrer"
        >
          Kelvin Moquete
        </a>
      </div>
      <img
        src={heroImg}
        alt="a crowd in a concert, during the night, with the main colors being orange and black"
      />
    </section>
  );
}
