import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Card from '../UI/Card/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    },posts)
    return (
        <div className="sidebar">
            <Card style={{marginBottom:'10px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImg">
                    <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-9/46495534_1903629896422475_2933339178563272704_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=Usu4ah8epbUAX86aHHS&_nc_ht=scontent.fdac24-1.fna&oh=574fb091209b97b91e1bcfa9714640f0&oe=5F732621" alt=""/>
                </div>
                <div className="profileBody">
                    <p className="persBio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nesciunt?</p>
                </div>
            </Card>
            <Card style={{marginBottom:'10px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post =>{
                            return(
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h4>{post.blogTitle}</h4>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    );
};

export default Sidebar;