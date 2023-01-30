import Childnopropswithmemo from "./Childnopropswithmemo";
import Mymodel from "./Mymodel";
import React, {useCallback, useState} from "react";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";
import Childfunctionpropnomemo from "./Childfunctionpropnomemo";
import Childfunctionpropwithmemo from "./Childfunctionpropwithmemo";
import Childcallbackfunctionpropnomemo from "./Childcallbackfunctionpropnomemo";
import Childcallbackfunctionpropwithmemo from "./Childcallbackfunctionpropwithmemo";

function ParentHasState() {

  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name');

  const logTime = (from) => console.log('In logTime, from ' + from + ' ' + Date.now());

  const logTime2 = useCallback(
    (from) => {
      console.log('In LogTime2, from ' + from + ' ' + Date.now())    },
    [],
  );

  return (
    <>
      <h1>Has State</h1>
      {/* The following have no memo so they always render when this parent renders*/}
      <Childnopropsnomemo/>
      <Childnamepropnomemo name={name}/>
      <Childfunctionpropnomemo logTime={logTime}/>
      <Childcallbackfunctionpropnomemo logTime2={logTime2}/>

      <br/>

      {/* Memoed child does not render when this parent renders*/}
      <Childnopropswithmemo/>

      {/* Memoed child does not render when this parent renders*/}
      {/* Does render when the name prop changes */}
      <Childnamepropwithmemo name={name}/>

      {/* Does render even though the child is memoed because the reference */}
      {/* to the function passed in props is always different  */}
      <Childfunctionpropwithmemo logTime={logTime}/>

      {/* Memoed child does not render when this parent renders because the */}
      {/*reference to the function passed in props is also memoed by useCallback*/}
      <Childcallbackfunctionpropwithmemo logTime2={logTime2}/>

      <Mymodel showModel={showModel} setShowModel={setShowModel} setName={setName}/>
    </>
  );
}

export default ParentHasState;
