import React from "react";
import Form from "./Form";

const userIsRegestired = true; 

function App() {
  return <div className="container">{
    <Form isRegestired={userIsRegestired}/>
  }</div>
    
  
}

export default App;
