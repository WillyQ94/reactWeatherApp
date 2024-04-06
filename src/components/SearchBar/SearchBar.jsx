import React from "react";
import Form from "react-bootstrap/Form";
import "./Searchbar.css";

function SearchBar(){
    return (
        <Form.Group className="searchField me-auto " >
            <Form.Label>Country</Form.Label>
            <Form.Control placeholder="test"/>
        </Form.Group>
    )
}

export default SearchBar;