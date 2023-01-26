import Childnopropswithmemo from "./Childnopropswithmemo";
import Mymodel from "./Mymodel";
import React, {useState} from "react";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";
import Childfunctionpropnomemo from "./Childfunctionpropnomemo";

function ParentHasState() {

  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');
  //const logTime = (from) => console.log(from + ' ' + Date.now());
  function logTime(from) {console.log(from + ' ' + Date.now())};

  return (
    <>
      <h1>Has State</h1>
      <Childnopropswithmemo/>
      <Childnopropsnomemo/>
      <Childnamepropnomemo name={name}/>
      <Childnamepropwithmemo name={name}/>
      <Childfunctionpropnomemo logTime={logTime}/>

      <Mymodel showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </>
  );
}

export default ParentHasState;
