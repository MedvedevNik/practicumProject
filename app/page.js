import { Banner } from "./components/Banner/Banner";
import { PopularCardsList } from "./components/CardList/PopularCardsList";
import { NewCardsList } from "./components/CardList/NewCardsList";
import { Promo } from "./components/Promo/Promo";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <PopularCardsList />
      <NewCardsList />
      <Promo />
    </main>
  );
}
