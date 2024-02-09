import Styles from "./CardsList.module.css";
export const NewCardsFragment = () => {
  return (
    <>
      <li className={'cards-list__item'}>
        <a href="/game-id.html" className={'card-list__link'}>
          <article className={'card'}>
            <img
src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"              alt=""
              className={'card__image'}
            />
            <div className={'card__content-block'}>
              <h3 className={'card__title'}>Go Away</h3>
              <p className={'card__description'}>
              Цель игры: добраться до конца уровня, не столкнувшись с
                    встречными автомобилями.Дополнительные возможности: в игре
                    можно проезжать по увеличивающей скорость стрелке, которые
                    улучшают характеристики машинки в скорости. "Прыжок"
                    позволяет машинке перепрыгивать препятствие.
              </p>
              <p className={'card__author'}>
                Автор: <span className={'card__accent'}>Mahisto</span>
              </p>
              <p className={'card__votes'}>
                Голосов на сайте:
                <span className={'card__accent'}>20</span>
              </p>
            </div>
          </article>
        </a>
      </li>
      <li className={'cards-list__item'}>
        <a href="/game-id.html" className={'card-list__link'}>
          <article className={'card'}>
            <img
                  src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                  alt=""
              className={'card__image'}
            />
            <div className={'card__content-block'}>
              <h3 className={'card__title'}>G.U.N.N.E.R.</h3>
              <p className={'card__description'}> Ваша задача — отбиваться от бесконечных волн врагов, которых
                    будет становится все больше и больше, как долго вы сможете
                    продержаться?</p>
              <p className={'card__author'}>
                Автор: <span className={'card__accent'}>IDKWIAm</span>
              </p>
              <p className={'card__votes'}>
                Голосов на сайте:
                <span className={'card__accent'}>10</span>
              </p>
            </div>
          </article>
        </a>
      </li>
      <li className={'cards-list__item'}>
        <a href="/game-id.html" className={'card-list__link'}>
          <article className={'card'}>
            <img
                  src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                  alt=""
              className={'card__image'}
            />
            <div className={'card__content-block'}>
              <h3 className={'card__title'}>Space Terror</h3>
              <p className={'card__description'}>
              Летите сквозь космос и уничтожайте все на своем пути!
                    Пролетите как можно дальше!
              </p>
              <p className={'card__author'}>
                Автор: <span className={'card__accent'}>IDKWIAm</span>
              </p>
              <p className={'card__votes'}>
                Голосов на сайте:
                <span className={'card__accent'}>20</span>
              </p>
            </div>
          </article>
        </a>
      </li>
      <li className={'cards-list__item'}>
        <a href="/game-id.html" className={'card-list__link'}>
          <article className={'card'}>
            <img
                  src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                  alt=""
              className={'card__image'}
            />
            <div className={'card__content-block'}>
              <h3 className={'card__title'}>Square Slayer</h3>
              <p className={'card__description'}>circle shoot square heal levelup crash game.</p>
              <p className={'card__author'}>
                Автор: <span className={'card__accent'}>niclan</span>
              </p>
              <p className={'card__votes'}>
                Голосов на сайте:
                <span className={'card__accent'}>10</span>
              </p>
            </div>
          </article>
        </a>
      </li>
    </>
  );
};
