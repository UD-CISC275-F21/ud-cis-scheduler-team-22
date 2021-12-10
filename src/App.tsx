import React, { useState } from "react";
import "./App.css";
import { CoursePool } from "./components/CoursePool";
import { Col, Container, Row } from "react-bootstrap";
import { Plan } from "./components/Table";
import {course} from "./interfaces/course";

function App(): JSX.Element {
    const[poolShowed,show] = useState<boolean>(false);
    
    return (
        <Container className="App">
            <Row>
                <Col>
                    <CoursePool show={show} poolShowed={poolShowed}></CoursePool>
                    
                </Col>
                <Col>
                    <Plan></Plan>    
                </Col>
            </Row>
        </Container>
    );
}

export default App;

