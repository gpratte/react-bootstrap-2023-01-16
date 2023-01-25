import React from 'react';

const Childnopropswithmemo = React.memo(function childnopropswithmemo() {
  return (
    <div>
      <h3>No props with memo</h3>
    </div>
  );
});

export default Childnopropswithmemo;
