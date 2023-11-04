import style from './ConcertInfo.module.css';
import closeIcon from './../../assets/icons/close-icon.png';

export function ConcertInfo() {
  return (
    <main className={style.concertInfo}>
      <div className={style.infoContainer}>
        <p>concert information</p>
        <button>
          <img
            src={closeIcon}
            alt="x letter  in black, which when clicked, closes the pop-up"
          />
        </button>
        <form action="">
          <label for="concert/tour">
            concert / tour
            <input
              type="text"
              name="concert/tour"
              placeholder="concert / tour"
            />
          </label>
          <label for="artist">
            artist
            <input type="text" name="artist" placeholder="artist" />
          </label>
          <label for="date">
            date
            <input type="date" name="date" placeholder="date" />
          </label>
          <label for="location">
            location
            <input type="text" name="location" placeholder="location" />
          </label>
          <label for="city">
            city
            <input type="text" name="city" placeholder="city" />
          </label>
          <label for="country">
            country
            <input type="text" name="country" placeholder="country" />
          </label>
          <label for="images">
            images
            <input type="file" name="images" placeholder="images" />
          </label>
        </form>
        <button>edit</button>
      </div>
    </main>
  );
}
