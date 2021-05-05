import React from 'react';
import './menuItem.scss';
const MenuItem = ({title, imageUrl, size})=>{
    return(
        <div style={{backgroundImage:`url(${imageUrl})`}} className={`${size} menu-item`}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
        </div>
    )
}
export default MenuItem;