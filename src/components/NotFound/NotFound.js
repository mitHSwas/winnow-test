import React from 'react';
import './NotFound.css'
import notFound from '../../images/notFound.webp'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='image' src={notFound} alt="" />
            <br />
            <h1>Page Not Found!</h1>
            <button className='home'>
                <Link to="/">Go Home</Link>
            </button>
        </div>
    );
};

export default NotFound;