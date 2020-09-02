import React, { useEffect, useState } from 'react';
import './BlogPost.css';
import Card from '../UI/Card/Card';
import blogPost from '../../data/blog.json';

const BlogPost = (props) => {
    const [post,setPost] = useState({});
    const [postId,setPostId] = useState(''); //change post from sidebar link
    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=> post.id == postId);
        setPost(post);
        setPostId(postId);
        console.log(post.blogImage)
    },[post,props.match.params.postId]) //props.match.params.postId is for showing post what you want to show from sidebar
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on: {post.postedOn} by: {post.author}</span>
                </div>
                <div className="postImageContainer">
                    <img src = {post.blogImage} alt=""/>
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    );
};

export default BlogPost;