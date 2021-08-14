import React from 'react';

function Button({ handleClick, children }) {
  console.log('Rendering Button - ', children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(Button);
