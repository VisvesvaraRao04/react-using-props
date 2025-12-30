import { Component } from "react";

export default class ProductCards extends Component{
    render(){
        return<>
            <div className="imgdiv1">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
                <h3>{this.props.brand}</h3>
                <h3>{this.props.rating}⭐</h3>
                <h3>₹{this.props.price}</h3>
                <h3>{this.props.avilable?"Avilable":"Coming soon"}</h3>
            </div>
        </>
    }
}