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
