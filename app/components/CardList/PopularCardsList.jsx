import { PopularCardsFragment } from "./PopularCardsFragment";
// import Styles from './CardsList.module.css';

export const PopularCardsList = () => {
  return (
    <section className={"list-section"}>
      <h2 className={"list-section__title"} id="popular">
        Популярное
      </h2>
      <ul className={"cards-list"}>
        <PopularCardsFragment />
      </ul>
    </section>
  );
};
