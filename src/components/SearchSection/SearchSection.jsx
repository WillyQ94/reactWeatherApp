import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchSection.css"

function SearchSection(){
    return (
        <Container className="searchSection" fluid>
            <Row className="mx-auto">
                <Col xs={10} sm={11}>
                    <SearchBar />
                </Col>
                <Col xs={2} sm={1}>
                    <Button variant="secondary searchButton"><i className="bi bi-search"></i></Button>
                </Col>
            </Row>   
        </Container>
    )
}

export default SearchSection;