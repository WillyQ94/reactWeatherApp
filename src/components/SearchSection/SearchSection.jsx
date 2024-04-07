import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../SearchBar/SearchBar";
import countryCodeList from "../../../public/json/countryCode.json";
import "./SearchSection.css";

function SearchSection(){

    const [searchedLocation, setSearchedLocation] = useState("");
    function handleSearchedLocation(data) {
        setSearchedLocation(data);
    };

    function updateCountryCode(inputArray) {
        for (var f = 0; f < inputArray.length; f++ ){
            var lowercaseInput = inputArray[f].toLowerCase();
            for (const [key, value] of Object.entries(countryCodeList)) {
                if(key.toLowerCase().includes(lowercaseInput)) {
                    inputArray[f] = value;
                    return value;
                }
            }
        }
        return "";
    }

    function updateCityName(inputArray,countryCode) {
        if (inputArray.length == 1 && inputArray[0] !== countryCode) {
            return inputArray[0];
        }

        if (inputArray.length == 2) {
            if (inputArray[0] == countryCode) {
                return inputArray[1];
            }else{
                return inputArray[0];
            }
        }

        return "";
    }

    function handleSearch(e) {
        e.preventDefault();
        const inputArray = searchedLocation.split(",");

        const countryCode = updateCountryCode(inputArray);
        
        const cityName  = updateCityName(inputArray,countryCode);

        var urlWithParams = openWeatherAPIGetCurrentWeather;
        if (cityName.length && countryCode.length) {
            urlWithParams += (cityName + ",," + countryCode);
        } else if (cityName.length) {
            urlWithParams += (cityName + ",,");
        } else if (countryCode.length) {
            urlWithParams += (",," + countryCode);
        }
    }

    return (
        <Form onSubmit={handleSearch}>
            <Container className="searchSection" fluid>
                <Row className="mx-auto">
                    <Col xs={10} sm={11}>
                        <SearchBar searchInput={handleSearchedLocation}/>
                    </Col>
                    <Col xs={2} sm={1}>
                        <Button type="submit" variant="secondary searchButton"><i className="bi bi-search"></i></Button>
                    </Col>
                </Row>   
            </Container>
        </Form>
    )
}

export default SearchSection;