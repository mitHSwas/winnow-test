import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData();
    const { name, questions } = quizes.data;
    return (
        <div>
            <h1>Quiz of {name}</h1>
            {
                questions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
            }
        </div>
    );
};

export default Quizes;