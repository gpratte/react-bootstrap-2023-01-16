import One from "./One";
import Two from "./Two";
import Mymodel from "./Mymodel";
import {useState} from "react";

function Home() {

  console.log('rendering home')
  const [showModel, setShowModel] = useState(true);

  return (
    <>
      <h1>Home</h1>
      <One/>
      <Two/>

      <Mymodel showModel={showModel} setShowModel={setShowModel}/>
    </>
  );
}

export default Home;
