import React from 'react';

const Childnamepropwithmemo = React.memo(function childnamepropwithmemo({name}) {
  console.log('rendering Childnamepropwithmemo')
  return (
    <div>
      <h3>Name prop with memo. Name is {name}</h3>
    </div>
  );
});

export default Childnamepropwithmemo;
