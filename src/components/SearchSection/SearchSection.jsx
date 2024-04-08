import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../SearchBar/SearchBar";
import countryCodeList from "../../../public/json/countryCode.json";
import "./SearchSection.css";
import OpenWeatherMapAPIService from "../../services/openWeatherMapAPIService";
import FetchClient from "../../services/FetchClient";

function SearchSection( { setCurrentSearch }){

    const [searchedLocation, setSearchedLocation] = useState("");
    const [result, setResult] = useState();

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
    
    useEffect(() => {
        console.log(result);
        if ( typeof result !== "undefined") {
            if (result.cod === 200) {
                setCurrentSearch(result);
            }
        }
    },[result]);

    function handleSearch(e) {
        e.preventDefault();
        const inputArray = searchedLocation.split(",");
        const countryCode = updateCountryCode(inputArray);
        const cityName  = updateCityName(inputArray,countryCode);

        var params = "";
        if (cityName.length && countryCode.length) {
            params = (cityName + ",," + countryCode);
        } else if (cityName.length) {
            params = (cityName + ",,");
        } else if (countryCode.length) {
            params = (",," + countryCode);
        }

        console.log(params);

        const openWeatherMapAPIService = new OpenWeatherMapAPIService(FetchClient);
        const fetchOpenWeatherMap = async () => {
            try {
                const getCurrentWeather = await openWeatherMapAPIService.getWeather(params);
                setResult(getCurrentWeather);
                
            } 
            catch {
                console.log("error in handleSearch");
            }
        }
        
        fetchOpenWeatherMap();
    
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