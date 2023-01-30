import Mymodel from "./Mymodel";
import Childnopropsnomemo from "./Childnopropsnomemo";
import Childnopropswithmemo from "./Childnopropswithmemo";
import Childnamepropnomemo from "./Childnamepropnomemo";
import Childnamepropwithmemo from "./Childnamepropwithmemo";
import Childfunctionpropnomemo from "./Childfunctionpropnomemo";
import Childfunctionpropwithmemo from "./Childfunctionpropwithmemo";
import Childcallbackfunctionpropnomemo from "./Childcallbackfunctionpropnomemo";
import Childcallbackfunctionpropwithmemo from "./Childcallbackfunctionpropwithmemo";

import useParentContext from "./useParentContext";

export default function ParentHasContext() {

  const {
    showModel,
    setShowModel,
    name,
    setName,
    logTime,
    logTime2
  } = useParentContext();

  return (
    <>
      <h1>Has Context</h1>
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
