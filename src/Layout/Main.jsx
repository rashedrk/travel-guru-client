import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};  

export default Main;