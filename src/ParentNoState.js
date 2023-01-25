import React from 'react';
import Button from 'react-bootstrap/Button';
import Mymodel2 from "./Mymodel2";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnopropsnomemo from "./Childnopropsnomemo";

function ParentNoState() {

  return (
    <>
      <h1>No State</h1>
      <Childnopropswithmemo/>
      <Childnopropsnomemo/>

      <Button variant="primary">
        Launch demo modal
      </Button>

      <Mymodel2 />
    </>
  );
}

export default ParentNoState