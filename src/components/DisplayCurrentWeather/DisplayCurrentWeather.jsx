import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DisplayCurrentWeather.css";
import sunImage from "../../../public/svg/assets/sun.png";


function DisplayCurrentWeather() {
    return (
        <Container className="displayCurrentWeather">
            <img src={sunImage} alt="sunImage"/>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default DisplayCurrentWeather;