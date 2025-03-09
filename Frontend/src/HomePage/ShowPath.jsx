import React from 'react';

function ShowPath({paths}) {
    return ( 
        <div className="container">
            <div className="row">
                {paths.length != 0 ? (
                    paths.map((item, index) => (
                        <li key={index}>
                            {item.map((country, idx) => (
                                <span key={idx}>{(idx != item.length-1) ? country[0] + " -> " : country[0] + " -> " + country[1]}</span>
                            ))} 
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-muted">No results found</li>
                )}
            </div>
        </div>
     );
}

export default ShowPath;