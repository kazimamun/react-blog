import React from 'react';

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
                        <a onClick={()=>paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>)
                })
            }
        </nav>
    );
};

export default Pagination;