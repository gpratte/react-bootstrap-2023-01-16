import React, {createContext, useContext, useState} from "react";
import Childnamefromprovidernomemo from "./Childnamefromprovidernomemo";
import {getTime} from "./utils";
import Mymodel from "./Mymodel";
import Mymodel2 from "./Mymodel2";
import Childnamefromproviderwithmemo from "./Childnamefromproviderwithmemo";

const ParentContext = createContext({});
export const useParentContext = () => useContext(ParentContext);

export default function ParentIsContextProvider() {

  const [showModel, setShowModel] = useState(true);
  const [name, setName] = useState('Initial Name ' + getTime());

  return (
    <ParentContext.Provider value={{name}}>
      <h1>Is Context Provider</h1>
      <Childnamefromprovidernomemo/>
      <Childnamefromproviderwithmemo/>
      <Mymodel showModel={showModel} setShowModel={setShowModel} setName={setName}/>
      {/*<Mymodel2/>*/}
    </ParentContext.Provider>
  );
}
