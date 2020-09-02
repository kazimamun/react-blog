import React from 'react';
import './Posts.css';
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/Sidebar/Sidebar';

const Posts = (props) => {
    return (
        <div>
            <section className="container">
                <BlogPost {...props}/>
                <Sidebar />
            </section>
        </div>
    );
};

export default Posts;