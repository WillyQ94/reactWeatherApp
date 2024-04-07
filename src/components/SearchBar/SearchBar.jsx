import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Searchbar.css";

function SearchBar({searchInput}){
    // const [input, setInput] = useState("");

    function searchInputUpdate(e) {
        searchInput(e.target.value);
    }
    
    return (
        <Form.Group className="searchField me-auto" >
            <Form.Label>Country</Form.Label>
            <Form.Control 
                placeholder="City Name ,  Country Code/ Country Name" 
                type="text"
                onChange={searchInputUpdate} />
        </Form.Group>
    )
}

export default SearchBar;