import Childnopropswithmemo from "./Childnopropswithmemo";
import Mymodel from "./Mymodel";
import {useState} from "react";
import Childnopropsnomemo from "./Childnopropsnomemo";

function ParentHasState() {

  const [showModel, setShowModel] = useState(true);

  return (
    <>
      <h1>Has State</h1>
      <Childnopropswithmemo/>
      <Childnopropsnomemo/>

      <Mymodel showModel={showModel} setShowModel={setShowModel}/>
    </>
  );
}

export default ParentHasState;
