import React from 'react';
import './Questions.css';
import toast, { Toaster } from 'react-hot-toast';
import { BeakerIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const Questions = ({ questions }) => {
    const { question, options, id, correctAnswer } = questions;
    const notify = option => {
        console.log(option, correctAnswer)
        if (option === correctAnswer) {
            toast("Congratulations! Your answer is correct.")
        }
        else {
            toast("Sorry!!! Your answer is incorrect.")
        }
    };

    const quizAnswer = () => {
        console.log(correctAnswer)
    }

    return (
        <div className='quiz-container'>
            <LockClosedIcon onClick={() => quizAnswer()} className='hero-icon' />
            <h4>Question: <br /> {question}</h4>
            <Toaster />
            <div className='quizzes'>
                <div onClick={() => notify(options[0])}>
                    <input type="radio" id={id} name={question} />
                    <label htmlFor={id}>{options[0]}</label>
                </div>
                <div onClick={() => notify(options[1])}>
                    <input type="radio" id={correctAnswer} name={question} />
                    <label htmlFor={correctAnswer}>{options[1]}</label>
                </div>
                <div onClick={() => notify(options[2])}>
                    <input type="radio" id={options[0]} name={question} />
                    <label htmlFor={options[0]}>{options[2]}</label>
                </div>
                <div onClick={() => notify(options[3])}>
                    <input type="radio" id={options[1]} name={question} />
                    <label htmlFor={options[1]}>{options[3]}</label>
                </div>

            </div>
        </div>
    );
};

export default Questions;