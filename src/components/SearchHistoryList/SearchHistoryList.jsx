import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SearchHistoryList.css"
import SearchHistoryItem from "../SearchHistoryItem/SearchHistoryItem";

function SearchHistoryList() {
    return (
        <Container className="searchHistoryListContainer mx-auto">
            <Row>
                <p>Search History</p>
            </Row>
            <Row>
                <SearchHistoryItem/>
            </Row>
            <Row>
                <SearchHistoryItem/>
            </Row>
        </Container>
    )
}

export default SearchHistoryList;