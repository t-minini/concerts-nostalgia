import style from './Hero.module.css';
import heroImg from './../../assets/images/kelvin-moquete-image.jpg';

export function Hero() {
  return (
    <main className={style.hero}>
      <div className={style.titleContainer}>
        <h1>concerts nostalgia</h1>
        <h2>my live concerts journey, revisited</h2>
      </div>
      <div className={style.kelvin}>
        photography by{' '}
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
      {/* <footer>
          &copy; 2023 Created, designed and built by by Tulio Minini
        </footer> */}
    </main>
  );
}
