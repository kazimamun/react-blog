import React from 'react';
import './PostContainer.css'
import Card from '../../../components/UI/Card/Card';

const PostContainer = (props) => {
    return (
        <div style={props.style}>
            <Card style={{marginBottom:'20px'}}>
                <div className="postImageWrapper">
                    <img src="https://gdurl.com/Yh-d" alt=""/>
                </div>
                <div style={{textAlign:'center'}}>
                    <p>Featured</p>
                    <h2>Title</h2>
                    <span>Posted on</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil? Illum, dolor aliquid. Atque minus nostrum officiis eius quo quas numquam cumque explicabo inventore. Maiores neque quasi obcaecati dignissimos repudiandae?</p>
                    <button>Read More</button>
                </div>
            </Card>
        </div>
    );
};

export default PostContainer;