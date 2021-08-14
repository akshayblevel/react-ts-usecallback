import React, { useCallback, useState } from 'react';
import Button from './Button';
import CartSummary from './CartSummary';
import Heading from './Heading';

export function Cart() {
  const [item, setItem] = useState(1);
  const [price, setPrice] = useState(100);

  const addItem = useCallback(() => {
    setItem(item + 1);
  }, [item]);

  const addPrice = useCallback(() => {
    setPrice(price + 100);
  }, [price]);

  //without useCallback
  // const addItem = () => {
  //   setItem(item + 1);
  // };

  // const addPrice = () => {
  //   setPrice(price + 100);
  // };

  return (
    <div>
      <Heading />
      <CartSummary field="Item" value={item} />
      <Button handleClick={addItem}>Add More Item</Button>
      <hr />
      <CartSummary field="Price" value={price} />
      <Button handleClick={addPrice}>Add More Price</Button>
    </div>
  );
}
