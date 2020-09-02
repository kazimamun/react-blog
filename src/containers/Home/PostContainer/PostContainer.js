import React from 'react';
import './PostContainer.css'
import Card from '../../../components/UI/Card/Card';
import { useState } from 'react';
import Pagination from '../../../components/Pagination/Pagination';

const PostContainer = (props) => {
    const posts = props.blog.data;
    
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(2)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber)=> setCurrentPage(pageNumber); //pageNumber came from pagination
    return (
        <div style={props.style}> {/*props come from home*/}
            {
                currentPosts.map(post=>{                        
                    return(
                        <Card style={{marginBottom:'20px'}}>
                            <div className="postImageWrapper">
                                <img src={post.blogImage} alt=""/>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <p>{post.blogCategory}</p>
                                <h2>{post.blogTitle}</h2>
                                <span>Posted on: {post.postedOn} by: {post.author}</span>
                                <p>{post.blogText}</p>
                                <button>Read More</button>
                            </div>
                        </Card>
                    )
                })
            }
            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    );
};

export default PostContainer;