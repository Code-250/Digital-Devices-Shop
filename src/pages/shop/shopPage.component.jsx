import React from 'react';

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collections/collection_preview";

class shopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return(

        <div>
            <h1>Shop Collection Page</h1> 
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) =>(
                        < CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        </div>
        )
    }
}

export default shopPage;