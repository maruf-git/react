import { useEffect, useState } from "react";
import "./Countries.css"
import Country from "./Country";
const Countries = () => {
    // state for storing data
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    // loading data and handling async operation
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        console.log(country);
    }



    return (
        <div>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map((country,idx)=><li key={idx}>{country.name.common}</li>)
                }
            </ul>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.common} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;