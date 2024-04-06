import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DisplayCurrentWeather.css";
import sunImage from "../../../public/svg/assets/sun.png";
import cloudImage from "../../../public/svg/assets/cloud.png";


function DisplayCurrentWeather() {

    //UseEffect to display the currentWeather image sun or cloudly

    return (
        <Container className="displayCurrentWeather">
            <Container className="imageContainer">
                <img src={sunImage} alt="sunImage"/>
            </Container>
            <Container className="weatherInfoContainer" fluid>
                <Row>
                    <Col>
                        <p>Today's Weather</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h1>26°</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <p>H: 29° L: 26°</p>
                    </Col>
                </Row>
                <Row>
                    <Col><p>State & Country</p></Col>
                    <Col><p>DateTime Retrieve</p></Col>
                    <Col><p>Humidity</p></Col>
                    <Col><p>Weather</p></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default DisplayCurrentWeather;