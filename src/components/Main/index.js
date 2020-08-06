import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './main.css'

const Main = () => {
    return (
        <div className="d-flex align-items-center w-100 problem-container" style={{
            justifyContent: 'space-evenly'
        }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff.png&text=problem+1" />
                <Card.Body>
                    <Card.Title>Problem 1</Card.Title>
                    <Card.Text>
                        Button Color switcher.
                    </Card.Text>
                    <Link to={'/problem1/redux'}>
                        <Button variant="primary">Redux</Button>
                    </Link>
                    <Link to={'/problem1/context'}>
                        <Button variant="secondary" className={'ml-2'}>Context</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff.png&text=problem+2" />
                <Card.Body>
                    <Card.Title>Problem</Card.Title>
                    <Card.Text>
                       Media Query
                    </Card.Text>
                    <Link to={'/problem2'}>
                        <Button variant="primary">Visit</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff.png&text=problem+3" />
                <Card.Body>
                    <Card.Title>Problem</Card.Title>
                    <Card.Text>
                        String Manipulation
                    </Card.Text>
                    <Link to={'/problem3'}>
                        <Button variant="primary">Visit</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Main;