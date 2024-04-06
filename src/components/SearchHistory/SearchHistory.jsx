import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SearchHistory.css";
import DisplayCurrentWeather from "../DisplayCurrentWeather/DisplayCurrentWeather";


function SearchHistory(){
    return (
        <Container className="searchHistoryContainer" fluid>
            <Row>
                {/* Task : Display Weather */}
                <DisplayCurrentWeather/>
            </Row>
            <Row>
                {/* Print out the list of Searched History */}
            </Row>
        </Container>
    )
}

export default SearchHistory;