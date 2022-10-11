import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizLanguage from '../QuizLanguage/QuizLanguage';
import './Home.css';

const Home = () => {
    const quizTropics = useLoaderData();
    const quizLanguages = quizTropics.data;
    return (
        <div className='container'>
            <div className='upper-header'>
                <div>
                    <h1>Learn to Code With Winnow Test Quiz</h1>
                    <h3>Practice with 300+ Questions</h3>
                    <button> <a href="#lower-header">Get Started ( it's free )</a> </button>
                </div>
            </div>
            <div id="lower-header">
                {
                    quizLanguages.map(quizLanguage => <QuizLanguage key={quizLanguage.id} quizLanguage={quizLanguage}></QuizLanguage>)
                }
            </div>
        </div>
    );
};

export default Home;