# react-ts-usecallback

useCallback is a hook that will return a memorized version of a callback function that only changes if one of the dependencies has changed
It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders

Heading.tsx

```js
import React from 'react';

function Heading() {
  console.log('Rendering Heading');
  return <h2>useCallback Example</h2>;
}

export default React.memo(Heading);
```

Button.tsx

```js
import React from 'react';

function Button({ handleClick, children }) {
  console.log('Rendering Button - ', children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
```

CartSummary.tsx

```js
import React from 'react';

function CartSummary({ field, value }) {
  console.log(`Rendering ${field}`);
  return (
    <div>
      Cart having {value} {field}
    </div>
  );
}

export default React.memo(CartSummary);
```

Cart.tsx

```js
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
```

app.tsx

```js
import React from 'react';
import { Cart } from './components/Cart';

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;
```

When you click on 'Add More Item' button, it will render that component only

![image](https://user-images.githubusercontent.com/38757471/129438911-78c805be-7272-44a6-992d-b9381fd07a40.png)
