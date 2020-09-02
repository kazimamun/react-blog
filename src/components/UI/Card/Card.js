import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card" {...props}> {/*props come from sidebar*/}
            {props.children} {/*props come from hero*/}
        </div>
    );
};

export default Card;