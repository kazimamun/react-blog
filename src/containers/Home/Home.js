import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/Card';
import PostContainer from './PostContainer/PostContainer';
import blog from '../../data/blog.json'
import Layout from '../../components/Layout/Layout';

const Home = (props) => {
    const imgArr = blog.data.map(post=>post.blogImage);
    const sideImg = imgArr.slice(1,4);
    return (
        <div>
            <Card>
                <div className="gallaryPost">

                    <section className="mainImageWraper" style={{width:'70%'}}>
                        <div className="mainImage">
                            <img src={imgArr[0]} alt=""/>
                        </div>
                    </section>
                    <section className="sideImageWraper" style={{width:'30%'}}>
                        {
                            sideImg.map(img=>{
                               return (
                                    <div className="sideImage">
                                        <img src={img} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>                
            </Card>
            <section className="homeContainer">
                <Layout>
                    <PostContainer style={{width: '70%'}} blog={blog}/>
                </Layout>
            </section>
        </div>
    );
};

export default Home;