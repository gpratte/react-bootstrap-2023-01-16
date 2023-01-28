import React from 'react';
import {getTime} from "./utils";

function Childnamepropnomemo({name}) {
  console.log('rendering Childnamepropnomemo')
  return (
    <div>
      <h3>{getTime()}  Name prop no memo. Name is {name}</h3>
    </div>
  );
};

export default Childnamepropnomemo;
