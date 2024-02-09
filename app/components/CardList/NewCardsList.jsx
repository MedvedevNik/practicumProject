import { NewCardsFragment } from "./NewCardsFragment";
// import Styles from './CardsList.module.css';

export const NewCardsList = () => {
  return (
    <section className={"list-section"}>
      <h2 className={"list-section__title"} id="new">
        Новинки
      </h2>
      <ul className={"cards-list"}>
        <NewCardsFragment />
      </ul>
    </section>
  );
};
