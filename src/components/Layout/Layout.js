import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
    return (
        <React.Fragment> {/*we can use React.Fragment against of div what not showing any section in browser*/}
            {props.children}
            <Sidebar />
        </React.Fragment>
    );
};

export default Layout; 