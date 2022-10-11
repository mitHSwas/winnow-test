import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuizLanguage.css'

const QuizLanguage = ({ quizLanguage }) => {
    const { id, logo, name } = quizLanguage;
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card className="card-body">
                <Card.Title>{name}</Card.Title>
                <Link to={`/quizTropic/${id}`}>
                    <Button variant="primary">Start Quiz</Button>
                </Link>
            </Card>
        </Card>
    );
};

export default QuizLanguage;