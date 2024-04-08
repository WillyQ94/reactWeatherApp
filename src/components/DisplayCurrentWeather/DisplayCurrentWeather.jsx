import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DisplayCurrentWeather.css";
import sunImage from "../../../public/svg/assets/sun.png";
import cloudImage from "../../../public/svg/assets/cloud.png";
import moment from "moment";


function DisplayCurrentWeather({currentSearch}) {

    //UseEffect to display the currentWeather image sun or cloudly
    
    return (
        <Container className="displayCurrentWeather">
            <Container className="imageContainer">
                {currentSearch?.weather[0]?.main !== "Clouds" ? 
                    <img src={sunImage} alt="sunImage"/> :
                    <img src={cloudImage} alt="cloudImage"/>}        
            </Container>
            <Container className="weatherInfoContainer" fluid>
                <Row>
                    <Col>
                        <p>Today's Weather</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h1>{currentSearch?.main?.temp}</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <p>H: {currentSearch?.main?.temp_max}° L: {currentSearch?.main?.temp_min}°</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}><p>{currentSearch?.name} & {currentSearch?.sys?.country}</p></Col>
                    <Col xs={4}><p>{moment(currentSearch?.dt).format("DD-MM-YYYY hh:mm A")}</p></Col>
                    <Col xs={2}><p>{currentSearch?.main?.humidity}</p></Col>
                    <Col xs={2}><p>{currentSearch.weather[0].main}</p></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default DisplayCurrentWeather;