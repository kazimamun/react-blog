import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/Card';
import Sidebar from '../../components/Sidebar/Sidebar';
import PostContainer from './PostContainer/PostContainer';

const Home = (props) => {

    return (
        <div>
            <Card>
                <div className="gallaryPost">
                    <section className="mainImageWraper" style={{width:'70%'}}>
                        <div className="mainImage">
                            <img src="https://gdurl.com/1aXsb" alt=""/>
                        </div>
                    </section>
                    <section className="sideImageWraper" style={{width:'30%'}}>
                        <div className="sideImage">
                            <img src="https://gdurl.com/1aXsb" alt=""/>
                        </div>
                        <div className="sideImage">
                            <img src="https://gdurl.com/u-nZ" alt=""/>
                        </div>
                        <div className="sideImage">
                            <img src="https://gdurl.com/Yh-d" alt=""/>
                        </div>
                    </section>
                </div>                
            </Card>
            <section className="homeContainer">
                <PostContainer style={{width: '70%'}} />
                <Sidebar />
            </section>
        </div>
    );
};

export default Home;