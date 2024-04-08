import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./SearchHistoryItem.css"
import moment from "moment";

function SearchHistoryItem({
    // handleRemoveItem,handleUpdateSearch,
    key,
    setCurrentSearch, setSearchHistoryList ,
    searchHistory, searchHistoryList}) {
    
    function handleRemoveItem() {
        if (key > -1 ){
            searchHistoryList.splice(key,1);
        }
        setSearchHistoryList(searchHistoryList);
    }

    function handleUpdateSearch(){
        console.log(searchHistory);
        setCurrentSearch(searchHistory);
    };

    return (
        <Container className="searchHistoryItemContainer">
            <Row>
                <Col xs={10}>
                    <Row>
                        <Col sm={6}>
                            <h5>{searchHistory?.name}, {searchHistory?.sys?.country}</h5>
                        </Col>
                        <Col sm={6}>
                            <p>{moment(parseInt(searchHistory?.updatedDT)*1000).format("DD-MM-YYYY hh:mm A")}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}>
                    {/* <Button  variant="secondary searchButton"><i className="bi bi-search"></i></Button> */}
                    <Button onClick={handleUpdateSearch} variant="secondary searchButton"><i className="bi bi-search"></i></Button>
                </Col>
                <Col xs={1}>
                    {/* <Button variant="secondary deleteButton"><i className="bi bi-trash-fill"></i></Button> */}
                    <Button onClick={handleRemoveItem} variant="secondary deleteButton"><i className="bi bi-trash-fill"></i></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchHistoryItem;