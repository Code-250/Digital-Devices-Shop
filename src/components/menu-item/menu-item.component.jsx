import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuItem.scss';
const MenuItem = ({title, imageUrl, size, history, match, linkUrl} )=>{
    return(
        <div className={`${size} menu-item `} style={{backgroundImage:`url(${imageUrl})`}} onClick = {()=>{history.push(`${match.url}${linkUrl}`)}} >
            <div className='background-image' >
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MenuItem);