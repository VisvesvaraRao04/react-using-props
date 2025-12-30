import { Component } from "react";
import Child from "./child";
import Cards from "./Cards";
import Snowfall from "react-snowfall";
import DefaultProps from "./DefaultProps";
export default class App extends Component{
  render(){
    return<>
    {/* <Child ename="krish" age={23} />
    <Child ename="krish baghrecha" age={20} />
    <Child ename="zoro" age={30} />
    <Child ename="luffy" age={32} /> */}
     <Cards/>
     <Snowfall color="white" snowflakeCount={500}
        style={{
          fontSize:"5vw",
          position: "fixed",
          width: "100vw",
          height: "100%",
          zIndex: -1,
        }}/>
     <DefaultProps name="raju" age={23}/>
    </>
  }
}
