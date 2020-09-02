import React from 'react';
import './Posts.css';
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/Sidebar/Sidebar';
import Layout from '../../components/Layout/Layout';

const Posts = (props) => {
    return (
        <div>
            <section className="container">
                <Layout>
                    <BlogPost {...props}/>
                </Layout>
            </section>
        </div>
    );
};

export default Posts;