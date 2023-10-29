import { ConcertsList } from '../../components/ConcertsList/ConcertsList';
import { ConcertInfo } from '../../components/ConcertInfo/ConcertInfo';
import { AddNewConcert } from '../../components/AddNewConcert/AddNewConcert';

export function HomePage() {
  return (
    <>
      <ConcertsList />
      <ConcertInfo />
      <AddNewConcert />
    </>
  );
}
