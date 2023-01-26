import React from 'react';

const Childfunctionpropwithmemo = React.memo(function childfunctionpropwithmemo({logTime}) {

  console.log('rendering Childfunctionpropwithmemo')
  logTime('Childfunctionpropwithmemo');

  return (
    <div>
      <h3>Function prop with memo</h3>
    </div>
  );
});

export default Childfunctionpropwithmemo;
