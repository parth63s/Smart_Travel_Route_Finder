import React, { useState } from "react";
import Select from "react-select";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "in", label: "India" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
];

const AllCon = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions || []);
  };

  return (
    <div className="container mt-4 col-6">
      <h4>Select Multiple Countries</h4>
      <Select
        options={countryOptions}
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
