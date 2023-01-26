import React from 'react';

function Childnamepropnomemo({name}) {
  console.log('rendering Childnamepropnomemo')
  return (
    <div>
      <h3>Name prop no memo. Name is {name}</h3>
    </div>
  );
};

export default Childnamepropnomemo;
