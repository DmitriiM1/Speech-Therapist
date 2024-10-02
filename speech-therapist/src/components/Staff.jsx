import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../styles/staff.css';
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

import photo1 from "../assets/specialists/Логопед.png";
import photo2 from "../assets/specialists/Дефектолог.png";
import photo3 from "../assets/specialists/Психолог.png";

const workers = [
    {
        id: 1,
        name: 'Логопед',
        major: 'занимается диагностикой и коррекцией речевых нарушений у детей. Он помогает развивать правильное произношение, расширять словарный запас и улучшать речевые навыки, что способствует общему интеллектуальному и социальному развитию ребенка.',
        img: photo1,
    },
    {
        id: 2,
        name: 'Дефектолог',
        major: 'специализируется на обучении и коррекции детей с особенностями развития. Он разрабатывает индивидуальные программы, направленные на улучшение когнитивных навыков, моторику и социальную адаптацию ребенка, поддерживая его всестороннее развитие.',
        img: photo2,
    },
    {
        id: 3,
        name: 'Психолог',
        major: 'работает с эмоциональными и поведенческими особенностями детей. Он помогает детям преодолевать страхи, развивать уверенность в себе и справляться с трудностями, связанными с адаптацией в обществе и учебной деятельностью.',
        img: photo3,
    },
    //   {
    //     id: 4,
    //     name: 'Emily Davis',
    //     major: 'Pediatrician',
    //     img: 'path/to/worker4.jpg',
    //   },
];

const Staff = () => {
    return (
        <Element name="specialists">
            <div className="staff_section">
                <Row xs={1} md={2} className="g-4">
                    {workers.map((worker) => (
                        <Col key={worker.id}>
                            <Card className="worker-card">
                                <div className="card-img-wrapper">
                                    <Card.Img variant="top" src={worker.img} alt={worker.name} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{worker.name}</Card.Title>
                                    <Card.Text>{worker.major}</Card.Text>
                                    <Link to="/form">
                                        <Button className="appointment-btn" variant="primary">
                                            Записаться прямо сейчас
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Element>
    )
}

export default Staff;
