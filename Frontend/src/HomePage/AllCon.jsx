import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const AllCon = () => {
  const [countries, setCountries] = useState([]);
  const [mstData, setMstData] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/allCountries")
      .then((response) => {
        const formattedCountries = response.data.map((country) => ({
          value: country,
          label: country,
        }));
        setCountries(formattedCountries);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions || []);
  };

  const handleClick = () => {
    axios
      .post("http://127.0.0.1:5000/findPriceWithCountry", {
        country: selectedCountries.map((c) => c.value),
      })
      .then((response) => {
        setMstData(response.data); // Ensure response data is properly structured
      })
      .catch((error) => console.error("Error fetching MST:", error));
  };

  return (
    <>
      <div className="container mt-3 col-7">
        <h4>Select Multiple Countries</h4>
        <Select
          options={countries}
          isMulti
          value={selectedCountries}
          onChange={handleChange}
          className="mb-3"
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
          <button className="btn btn-primary" onClick={handleClick}>
            Find Cost
          </button>
        </div>

        {/* Display MST Data in Table */}
      </div>
        {mstData && (
          <div className="mt-4">
            <h4>Minimum Spanning Tree</h4>
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Node 1</th>
                  <th>Node 2</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {mstData[0].map(([u, v, cost], index) => (
                  <tr key={index}>
                    <td>{u}</td>
                    <td>{v}</td>
                    <td>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h5 className="mt-3 mb-4">
              <strong>Total Cost:</strong> {mstData[1]}
            </h5>
          </div>
        )}
    </>
  );
};

export default AllCon;
