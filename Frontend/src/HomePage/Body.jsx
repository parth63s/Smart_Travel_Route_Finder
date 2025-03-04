import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LowerCost from './LowerCost';
import AllCon from './AllCon';

function Body({index}) {
    const [link, setLink] = useState(0);
    const handleLinkClink = (index) => {
        setLink(index);
      }
    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    return ( 
        <div className="container margin">
            <div className="row">
                <div className="offset-4 col-2 text-center">
                    <Link className="nav-link active" aria-current="page" to="/" onClick={() => handleLinkClink(0)}>
                        <p className={link == 0 ? activeMenuClass : menuClass}>Path Cost</p>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link className="nav-link active" aria-current="page" to="/AllCon" onClick={() => handleLinkClink(1)}>
                        <p className={link == 1 ? activeMenuClass : menuClass}>All Contiries Travel Cost</p>
                    </Link>
                </div>
                {(link == 0) ? <LowerCost/> : <AllCon/>}
            </div>
        </div>
     );
}

export default Body;