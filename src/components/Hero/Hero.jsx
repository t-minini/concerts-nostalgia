import { Link } from 'react-scroll';
import style from './Hero.module.css';
import heroImg from './../../assets/images/kelvin-moquete-image.jpg';
// import arrowDown from './../../assets/icons/arrow-down-wite.png';

export function Hero() {
  return (
    <main className={style.hero}>
      <div className={style.titleContainer}>
        <h1>concerts nostalgia</h1>
        <h2>my live concerts journey, revisited</h2>
      </div>
      <Link to="tickets" smooth={true} className={style.arrowContainer}>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
      </Link>
      <div className={style.kelvinCopy}>
        photography by
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
    </main>
  );
}
