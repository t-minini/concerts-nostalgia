import style from './ConcertInfo.module.css';
import closeIcon from './../../assets/icons/close-icon.png';

export function ConcertInfo() {
  return (
    <main className={style.concertInfo}>
      <div className={style.infoContainer}>
        <div className={style.topContainer}>
          <p>concert information</p>
          <button>
            <img
              src={closeIcon}
              alt="x letter  in black, which when clicked, closes the pop-up"
            />
          </button>
        </div>

        <form action="">
          <label htmlFor="concert">
            concert / tour
            <input
              type="text"
              name="concert/tour"
              placeholder="concert / tour"
            />
          </label>
          <label htmlFor="artist">
            artist
            <input type="text" id="artist" name="artist" placeholder="artist" />
          </label>
          <label htmlFor="date">
            date
            <input type="date" id="date" name="date" placeholder="date" />
          </label>
          <label htmlFor="location">
            location
            <input
              type="text"
              id="location"
              name="location"
              placeholder="location"
            />
          </label>
          <label htmlFor="city">
            city
            <input type="text" id="city" name="city" placeholder="city" />
          </label>
          <label htmlFor="country">
            country
            <input
              type="text"
              id="country"
              name="country"
              placeholder="country"
            />
          </label>
          <label htmlFor="images">
            images
            <input type="file" id="images" name="images" placeholder="images" />
          </label>
        </form>
        <button>edit</button>
      </div>
    </main>
  );
}
