import React from 'react';
import './Questions.css';

const Questions = ({ questions }) => {
    const { question, options, id, correctAnswer } = questions;
    return (
        <div className='container quiz-container'>
            <h4>Question: <br /> {question}</h4>
            <div className='quizzes'>
                <div>
                    <input type="radio" id={id} name={question} />
                    <label for={id}>{options[0]}</label>
                </div>
                <div>
                    <input type="radio" id={correctAnswer} name={question} />
                    <label for={correctAnswer}>{options[1]}</label>
                </div>
                <div>
                    <input type="radio" id={options[0]} name={question} />
                    <label for={options[0]}>{options[2]}</label>
                </div>
                <div>
                    <input type="radio" id={options[1]} name={question} />
                    <label for={options[1]}>{options[3]}</label>
                </div>

            </div>
        </div>
    );
};

export default Questions;