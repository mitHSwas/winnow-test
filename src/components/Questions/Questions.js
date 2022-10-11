import React from 'react';

const Questions = ({ questions }) => {
    console.log(questions)
    const { question, options, id, correctAnswer } = questions;
    return (
        <div>
            <h3>Question: {question}</h3>
            <div>
                <input type="radio" name="react" value="HTML" />{options[0]}
                <input type="radio" name="react" value="CSS" />{options[1]}
                <input type="radio" name="react" value="JavaScript" />{options[2]}
                <input type="radio" name="react" value="JavaScript" />{options[3]}
            </div>
        </div>
    );
};

export default Questions;