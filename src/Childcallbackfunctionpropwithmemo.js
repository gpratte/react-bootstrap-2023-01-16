import React from 'react';
import {getTime} from "./utils";

const Childcallbackfunctionpropwithmemo = React.memo(function childcallbackfunctionpropwithmemo({logTime2}) {
  console.log('rendering Childcallbackfunctionpropwithmemo')
  logTime2('Childcallbackfunctionpropwithmemo');
  return (
    <div>
      <h3>{getTime()}  Callback function prop with memo</h3>
    </div>
  );
});

export default Childcallbackfunctionpropwithmemo;
