import React from "react";
import {Link} from "react-router-dom";

export default function SmallCards(props) {
    return (
      <div className="small-card-wrapper">
         <div className="blank-region" style={{background: `url(${props.avatar}) no-repeat center center`}}>
         </div>
          <div className="small-card-content">
              <h3> {props.name} </h3>
              <Link to={`/users/${props.name}`} className='small-card-btn'>
                  See More
              </Link>
          </div>
      </div>
    );
}