import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SearchHistory.css";
import DisplayCurrentWeather from "../DisplayCurrentWeather/DisplayCurrentWeather";
import SearchHistoryList from "../SearchHistoryList/SearchHistoryList";


function SearchHistory({currentSearch, setCurrentSearch, searchHistoryList, setSearchHistoryList}){
    return (
        <Container className="searchHistoryContainer" fluid>
            <Row>
                {/* Task : Display Weather */}
                <DisplayCurrentWeather currentSearch={currentSearch}/>
            </Row>
            <Row>
                {/* Print out the list of Searched History */}
                <SearchHistoryList 
                    setCurrentSearch={setCurrentSearch} 
                    searchHistoryList={searchHistoryList}
                    setSearchHistoryList={setSearchHistoryList}/>
            </Row>
        </Container>
    )
}

export default SearchHistory;