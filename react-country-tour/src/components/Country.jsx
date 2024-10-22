import { useState } from "react";
import "./Country.css";
const Country = ({ country,handleVisitedCountries }) => {
    console.log(country);
    // generating country name and flags
    const { name, flags } = country;

    // state for visited status
    const [isVisited, setIsVisited] = useState(false);

    // toggle visited status
    const handleVisitedButton = () => {
        setIsVisited(!isVisited);
    }
    console.log(handleVisitedCountries);

    return (
        <div className="country-container">
            <div style={{ height: "120px", width: "150px" }}>
                <img src={flags.png} style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>
            </div>
            <h1 style={{ fontSize: "16px" }}>Country Name : {name.common}</h1>
            <button onClick={()=>{handleVisitedCountries(country)}}>Mark Visited</button>
            <br />
            <button onClick={handleVisitedButton}>{isVisited ? "Visited" : "Going"}</button>
            {/* style={{isVisited?`color:"green"`:`color:"red`}} */}
            <p className={`${isVisited ? "green" : "red"}`}>{isVisited ? "I have visited the country" : "I Will visit the country"}</p>
        </div >
    );
};

export default Country;