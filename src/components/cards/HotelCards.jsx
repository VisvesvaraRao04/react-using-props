import { Component } from "react";

export default class HotelCards extends Component{
   render(){
    return<>
            <div className="imgdiv1">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                <h1>{this.props.title}</h1>
                <h3>{this.props.location}</h3>
                <h3>₹{this.props.price}</h3>
                <h3>{this.props.rating}⭐</h3>
                <ul>
                    {this.props.amenities.map(a=>(<li>{a}</li>))}
                </ul>
            </div>
    </>
   }
}