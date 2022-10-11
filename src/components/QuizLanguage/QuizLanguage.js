import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './QuizLanguage.css'

const QuizLanguage = ({ quizLanguage }) => {
    const { logo, name } = quizLanguage;
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card className="card-body">
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Start Quiz</Button>
            </Card>
        </Card>
    );
};

export default QuizLanguage;