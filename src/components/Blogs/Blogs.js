import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs'>
            <div className='blog'>
                <h1>What is the purpose of React Router?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='blog'>
                <h1>How does Context Api works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog'>
                <h1>What is useRef ? How it works</h1>
                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            </div>
        </div>
    );
};

export default Blogs;