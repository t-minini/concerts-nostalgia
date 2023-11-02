import style from './Footer.module.css';
// import linkIcon from './../../assets/icons/icons8-link-96.png';

export function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.footerInfo}>
        <div className={style.title}>
          <h1>concerts nostalgia</h1>
          <h2>my live concerts journey, revisited</h2>
        </div>
        <div className={style.links}>
          <a
            href="https://www.linkedin.com/in/tulio-minini/"
            target={'_blank'}
            rel="noreferrer"
            title="linkedin"
          >
            linkedIn
            {/* <img src={linkIcon} alt="" /> */}
          </a>
          <a
            href="https://github.com/t-minini"
            target={'_blank'}
            rel="noreferrer"
            title="github"
          >
            github
            {/* <img src={linkIcon} alt="" /> */}
          </a>
          <a
            href="mailto:tulio.mminini@gmail.com"
            target={'_blank'}
            rel="noreferrer"
            title="Send me an e-mail"
          >
            email
            {/* <img src={linkIcon} alt="" /> */}
          </a>
        </div>
      </section>
      <div className={style.copyright}>
        <p>&copy; 2023 Created, designed and built by Tulio Minini</p>
      </div>
    </footer>
  );
}
