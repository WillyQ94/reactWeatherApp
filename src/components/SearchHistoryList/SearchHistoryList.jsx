import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./SearchHistoryList.css"
import SearchHistoryItem from "../SearchHistoryItem/SearchHistoryItem";

function SearchHistoryList({setCurrentSearch, searchHistoryList, setSearchHistoryList}) {
    
    return (
        <Container className="searchHistoryListContainer mx-auto">
            <Row>
                <p>Search History</p>
            </Row>
            {
                searchHistoryList.map((searchHistory, index) => 
                    <Row key={index}>
                        <SearchHistoryItem 
                            key={index}
                            // handleRemoveItem={handleRemoveItem}
                            // handleUpdateSearch={handleUpdateSearch}
                            setSearchHistoryList={setSearchHistoryList }
                            setCurrentSearch={setCurrentSearch}
                            searchHistory={searchHistory}
                            searchHistoryList={searchHistoryList}
                            />
                    </Row>
                )
            }
            
        </Container>
    )
}

export default SearchHistoryList;