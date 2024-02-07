import { Link } from 'react-scroll';
import style from './HeroOpt2.module.css';
import heroImg from './../../assets/images/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg';
// import arrowDown from './../../assets/icons/arrow-down-wite.png';

export function HeroOpt2() {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <h1>concerts nostalgia</h1>
        <p>my live concerts journey, revisited.</p>
        <img src={heroImg} alt="a crowd in a concert, during the night" />
      </div>
      <Link to="tickets" smooth={true} className={style.arrow__container}>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
        <div className={style.arrowDown}></div>
      </Link>
    </section>
  );
}
