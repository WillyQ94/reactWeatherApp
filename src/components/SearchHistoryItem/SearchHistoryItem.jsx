import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./SearchHistoryItem.css"

function SearchHistoryItem() {
    return (
        <Container className="searchHistoryItemContainer">
            <Row>
                <Col xs={10}>
                    <Row>
                        <Col sm={6}>
                            <h5>Johor, MY</h5>
                        </Col>
                        <Col sm={6}>
                            <p>01-09-2022 09:41am</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}>
                    <Button variant="secondary searchButton"><i class="bi bi-search"></i></Button>
                </Col>
                <Col xs={1}>
                    <Button variant="secondary deleteButton"><i class="bi bi-trash-fill"></i></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchHistoryItem;