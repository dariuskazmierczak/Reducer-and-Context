//import { useContext } from 'react';
import BasketItem from './BasketItem';
import { useBasketDispatchContext } from './Shop';
//import { BasketDispatchContext } from './Shop';

export default function BasketDisplay({ basket }) {
  //const basketDispatch = useContext(BasketDispatchContext);

  const basketDispatch = useBasketDispatchContext();
  const basketIsEmpty = basket.length === 0;

  return (
    <section className="basket">
      <h2 className="basket__heading">Warenkorb</h2>
      {basketIsEmpty && <strong>Warenkorb ist leer</strong>}
      {basketIsEmpty || (
        <>
          <ul className="basket__list">
            {basket.map((item) => (
              <BasketItem key={item.id} {...item} />
            ))}
          </ul>
          <button onClick={() => basketDispatch({ type: 'emptyBasket' })}>
            Warenkorb leeren
          </button>
        </>
      )}
    </section>
  );
}
