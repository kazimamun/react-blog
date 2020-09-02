import React from 'react';
import './Pagination.css';

const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];
    for(let i=1;i <= Math.ceil(totalPosts / postPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            {
                pageNumbers.map(number=>{
                    return(<li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} style={{cursor:'pointer', listStyle:'none'}} className="page-link">
                            {number}
                        </a>
                    </li>)
                })
            }
        </nav>
    );
};

export default Pagination;