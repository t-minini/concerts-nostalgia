import style from './Hero.module.css';
import { NavLink } from 'react-router-dom';
import heroImg from './../../assets/images/nainoa-shizuru-image.jpg';

export function Hero() {
  return (
    <main className={style.enterContainer}>
      <section className={style.leftContainer}>
        <footer>
          photography by
          <a
            href="https://www.nainoashizuru.com/"
            target="_blank"
            rel="noreferrer"
          >
            Nainoa Shizuru
          </a>
        </footer>
        <img
          src={heroImg}
          alt="a crowd in a concert, during the night, with the main colors being orange and black"
        />
      </section>
      <section className={style.rightContainer}>
        <h1>concerts nostalgia</h1>
        <h2>my live concerts journey, revisited</h2>
        <NavLink to="/home">enter</NavLink>
        <footer>
          &copy; 2023 Created, designed and built by by Tulio Minini
        </footer>
      </section>
    </main>
  );
}
