import { useEffect, useState } from "react";
import axios from "axios";

const LowerCost = () => {

  const [countries, setCountries] = useState([]);

  
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");
  const [isShowListFrom, setIsShowListFrom] = useState(false);
  const [isShowListTo, setIsShowListTo] = useState(false);
  const [Stops, setStops] = useState(0);
  const [paths, setPaths] = useState([]);
  
  useEffect(() => {
    const fetchData = async ()=> {
        try {
            const requestData = {
                search : queryFrom
              };
            const response = await axios.post("http://127.0.0.1:5000/SearchCountries", requestData);
            setCountries(response.data)
        } catch (error) {
            console.log("Error fetching data : ", error)
        }
    }
    fetchData();

  }, [queryFrom]);

  useEffect(() => {
    const fetchData = async ()=> {
        try {
            const requestData = {
                search : queryTo
              };
            const response = await axios.post("http://127.0.0.1:5000/SearchCountries", requestData);
            setCountries(response.data)
        } catch (error) {
            console.log("Error fetching data : ", error)
        }
    }
    fetchData();
    
  }, [queryTo]);

  const handleClick = () => {
    const fetchData = async ()=> {
        try {
            const requestData = {
                from : queryFrom,
                to : queryTo,
                stops: Stops 
              };
            const response = await axios.post("http://127.0.0.1:5000/findAllCost", requestData);
            setPaths(response.data || []);
        } catch (error) {
            console.log("Error fetching data : ", error)
        }
    }
    fetchData();
    
  }


  const handleSearchFrom = (event) => {
    const value = event.target.value;
    setQueryFrom(value);
  };

  const handleListFrom = (item) => {
    setQueryFrom(item);
    setIsShowListFrom(false);
  }
  const handleSearchTo = (event) => {
    const value = event.target.value;
    setQueryTo(value);
  };

  const handleListTo = (item) => {
    setQueryTo(item);
    setIsShowListTo(false);
  }

  return (
    <div className="container mt-3" >
        <div className="row">
            <div className="offset-1 col-5">
                <div className="mt-3 ">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">From</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: India"
                        aria-label="From"
                        aria-describedby="addon-wrapping"
                        value={queryFrom}
                        onChange={handleSearchFrom}
                        onFocus={() => setIsShowListFrom(true)}
                        />
                    </div>
                    {isShowListFrom && queryFrom && (
                        <ul className="list-group mt-2 overflow-auto" style={{ maxHeight: "150px" }}>
                        {countries.length > 0 ? (
                            countries.map((item, index) => (
                            <li key={index} className="list-group-item list-group-item-action" onClick={() => handleListFrom(item)}>
                                {item}
                            </li>
                            ))
                        ) : (
                            <li className="list-group-item text-muted">No results found</li>
                        )}
                        </ul>
                    )}
                </div>
            </div>
            
            <div className=" col-5">

                <div className="mt-3">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">To</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: Canada"
                        aria-label="From"
                        aria-describedby="addon-wrapping"
                        value={queryTo}
                        onChange={handleSearchTo}
                        onFocus={() => setIsShowListTo(true)}
                        />
                    </div>
                    {isShowListTo && queryTo && (
                        <ul className="list-group mt-2 overflow-auto" style={{ maxHeight: "150px" }}>
                        {countries.length > 0 ? (
                            countries.map((item, index) => (
                            <li key={index} className="list-group-item list-group-item-action" onClick={() => handleListTo(item)}>
                                {item}
                            </li>
                            ))
                        ) : (
                            <li className="list-group-item text-muted">No results found</li>
                        )}
                        </ul>
                    )}
                </div>
            </div>

            <div className="offset-4 col-4">
                <div className="mt-3 ">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">Stop</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ex:1"
                            aria-label="From"
                            aria-describedby="addon-wrapping"
                            onChange={(e)=>setStops(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <button className="btn btn-primary m-2 col-2" onClick={handleClick}>Find Cost</button>
            </div>
        </div>
        
        <table className="table border">
            <thead >
                <tr>
                <th>Countries</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {paths.length !== 0 ? (
                paths.map((item, index) => (
                    <tr key={index}>
                    <td>
                        {item.map((country, idx) => (
                        <span key={idx}>
                            {country[0]}
                            {idx !== item.length - 1 ? " -> " : ""}
                        </span>
                        ))}
                    </td>
                    <td>
                        <b>{item[item.length - 1][1]}</b>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="2" className="text-muted text-center">
                    No results found
                    </td>
                </tr>
                )}
            </tbody>
        </table>


    </div>
  );
};

export default LowerCost;


