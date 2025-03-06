import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const AllCon = () => {
  const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios.get("http://127.0.0.1:5000/allCountries")
      .then(response => {
        const formattedCountries = response.data.map(country => ({
          value: country,
          label: country
        }));
        setCountries(formattedCountries);
      })
      .catch(error => console.error("Error fetching data : ", error));
    }, []);

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions || []);
  };

  return (
    <div className="container mt-4 col-6">
      <h4>Select Multiple Countries</h4>
      <Select
        options={countries}
        isMulti
        value={selectedCountries}
        onChange={handleChange}
        className="mb-3 "
      />
      <div>
        <h5>Selected Countries:</h5>
        <ul>
          {selectedCountries.map((country) => (
            <li key={country.value}>{country.label}</li>
          ))}
        </ul>
      </div>
      <div>
          <button className="btn btn-primary">Find Cost</button>
      </div>
    </div>
  );
};

export default AllCon;
