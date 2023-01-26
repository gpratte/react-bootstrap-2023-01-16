import React from 'react';
import Button from 'react-bootstrap/Button';
import Mymodel2 from "./Mymodel2";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";

function ParentNoState() {

  const name = 'Static Name';

  return (
    <>
      <h1>No State</h1>
      <Childnopropswithmemo/>
      <Childnopropsnomemo/>
      <Childnamepropnomemo name={name}/>
      <Childnamepropwithmemo name={name}/>

      <Button variant="primary">
        Launch demo modal
      </Button>

      <Mymodel2 />
    </>
  );
}

export default ParentNoState