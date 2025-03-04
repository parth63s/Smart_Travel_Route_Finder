import { useState } from "react";

const LowerCost = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange", "Pineapple"];
  
  const [queryFrom, setQueryFrom] = useState("");
  const [queryTo, setQueryTo] = useState("");
  const [isShowListFrom, setIsShowListFrom] = useState(false);
  const [isShowListTo, setIsShowListTo] = useState(false);

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
    <div className="container mt-5" >
        <div className="row">
            <div className="row justify-content-center ">
                <div className="mt-3 col-4">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">From</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ex:india"
                        aria-label="From"
                        aria-describedby="addon-wrapping"
                        value={queryFrom}
                        onChange={handleSearchFrom}
                        onFocus={() => setIsShowListFrom(true)}
                        />
                    </div>
                    {isShowListFrom && queryFrom && (
                        <ul className="list-group mt-2 overflow-auto" style={{ maxHeight: "150px" }}>
                        {items.length > 0 ? (
                            items.map((item, index) => (
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
            
            <div className="row justify-content-center ">

                <div className="mt-3 col-4 ">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">To</span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ex:india"
                        aria-label="From"
                        aria-describedby="addon-wrapping"
                        value={queryTo}
                        onChange={handleSearchTo}
                        onFocus={() => setIsShowListTo(true)}
                        />
                    </div>
                    {isShowListTo && queryTo && (
                        <ul className="list-group mt-2 overflow-auto" style={{ maxHeight: "150px" }}>
                        {items.length > 0 ? (
                            items.map((item, index) => (
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

            <div className="row justify-content-center ">
                <div className="mt-3 col-4">
                    <div className="input-group">
                        <span className="input-group-text" id="addon-wrapping">Stop</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ex:1"
                            aria-label="From"
                            aria-describedby="addon-wrapping"
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <button className="btn btn-primary m-2 col-2">Find Cost</button>
            </div>
        </div>
        

    </div>
  );
};

export default LowerCost;