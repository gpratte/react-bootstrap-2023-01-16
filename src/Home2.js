import React from 'react';
import Button from 'react-bootstrap/Button';
import Mymodel2 from "./Mymodel2";
import One from "./One";
import Two from "./Two";

function Home2() {

  console.log('rendering home2')

  return (
    <>
      <h1>Home2</h1>
      <One/>
      <Two/>

      <Button variant="primary">
        Launch demo modal
      </Button>

      <Mymodel2 />
    </>
  );
}

export default Home2