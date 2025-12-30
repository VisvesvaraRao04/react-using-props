import { Component } from "react";

export default class FoodCards extends Component{
    render(){
        return<>
            <div className="imgdiv1">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                <h1>{this.props.title}</h1>
                <h3>{this.props.description}</h3>
                <h3>{this.props.category}</h3>
                <h3>{this.props.rating}⭐</h3>
                <h3>₹{this.props.price}</h3>
                <h3>{this.props.isVeg?"🟢":"🔴"}</h3>
            </div>
        </>
    }
}