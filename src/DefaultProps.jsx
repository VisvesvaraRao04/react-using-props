import { Component } from "react";

export default class DefaultProps extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps={
        email:"raju@gmail.com",
        gender:'m'
    }
    render(){
        return<>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h3>{this.props.email}</h3>
        <h3>{this.props.gender}</h3>
        </>
    }
}