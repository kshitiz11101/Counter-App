// Now write the first component
// Arrow Functions
import React from "react"
import { Greet } from "./Components/Greet";
import { List } from "./Components/List";
const App=()=>{
  // document.createElement('p) // DOM
  // return React.createElement('h1',null,'Hello React Js....');
  // return <h1>Hello React Js</h1>  //VDOM
  // return React.createElement(('div',null,h1,'Hello react js'),('div',null,h2,'Hii  react js'));
  const name='Amit';
  const role='Manager';
  const logic=()=>{
    if(role==='Admin'){
      return <h3>Welcome {role}</h3>
    }
    else if(role==='Manager'){
      return <h3>Hi {role}</h3>
    }
    else{
      return <h4>Hello {role}</h4>
    }
  }
  return (
    <>
    <input type="text" placeholder="Type your name"/>
    <h1>Welcome {name}</h1>

    <Greet username={name}/>
    <h1>Hello React Js {name}</h1>
    {/* <p>{role==='Admin'?'Welcome Admin':'Welcome Guest'}</p> */}
    {logic()}
    {List()}
    <h2>Hi React Js{Date.now()} </h2>

  </>
  )
}
export default App;