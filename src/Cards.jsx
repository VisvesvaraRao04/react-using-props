import { Component } from "react";
import HotelCards from "./components/cards/HotelCards";
import MovieCards from "./components/cards/MovieCards";
import ProductCards from "./components/cards/ProductCards";
import { hotelCards,movieCards,foodCards,productCards } from "./Data";
import FoodCards from "./components/cards/FoodCards";
export default class Cards extends Component{
    render(){
        return<>
        <h1 className="headings">Hotels</h1>
        <div class="imgdiv">
            {hotelCards.map(res=>{return <HotelCards imgSrc={res.imgSrc} title={res.title} location={res.location} description={res.description} rating={res.rating} price={res.pricePerNight} imgAlt={res.title} amenities={res.amenities} />})}
        </div>
        <h1 className="headings">Movies</h1>
        <div class="imgdiv">
            {movieCards.map(res=>{return <MovieCards imgSrc={res.imgSrc} title={res.title} releaseYear={res.releaseYear} description={res.description} rating={res.rating} duration={res.duration} imgAlt={res.title} genre={res.genre} />})}
        </div>
        <h1 className="headings">Food</h1>
        <div class="imgdiv">
            {foodCards.map(res=>{return <FoodCards imgSrc={res.imgSrc} title={res.title} category={res.category} description={res.description} rating={res.rating} price={res.price} imgAlt={res.title} isVeg={res.isVeg} />})}
        </div>
        <h1 className="headings">Products</h1>
        <div class="imgdiv">
            {productCards.map(res=>{return <ProductCards imgSrc={res.imgSrc} title={res.title} brand={res.brand} description={res.description} rating={res.rating} price={res.price} imgAlt={res.title} avilable={res.inStock} />})}
        </div>
        </>
    }
}