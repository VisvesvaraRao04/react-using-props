import {Component} from "react";
 export default class Child extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return<>
        <p>My name is {this.props.ename} age is {this.props.age}</p>
        </>
    }
}