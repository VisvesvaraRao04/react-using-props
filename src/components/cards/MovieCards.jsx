import { Component } from "react";

export default class MovieCards extends Component{
    render(){
        return<>
            <div className="imgdiv1">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                <h1>{this.props.title}</h1>
                <h3>{this.props.releaseYear}</h3>
                <h3>{this.props.description}</h3>
                <h3>{this.props.rating}⭐</h3>
                <h3>{this.props.duration}</h3>
                <h3><strong>Genre : </strong>{this.props.genre.join(",")}</h3>
            </div>
        </>
    }
}