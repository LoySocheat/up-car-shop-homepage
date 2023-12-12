import React from "react";
import{PRODUCTS} from "../../products";
import{Product} from "./product"
import "./shop.css"
import SliderBanner from "../../components/SliderBanner";

export const Shop = () =>{
    return(
        <div className="style_car">
            <SliderBanner />
            <div className="carTitle">
                <h1>Model Cars</h1>
            </div>
            <div className="products">
                {PRODUCTS.map ((product)=> (
                    <div>
                        <Product data={product}/>
                    </div>
                ))}
            </div>
        </div>

    )
}