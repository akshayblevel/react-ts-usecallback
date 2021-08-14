import React from 'react';

function Heading() {
  console.log('Rendering Heading');
  return <h2>useCallback Example</h2>;
}

export default React.memo(Heading);

