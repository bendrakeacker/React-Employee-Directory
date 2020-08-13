import React from "react";
import "./style.css";

function SearchDirectory(props) {
    return (
        <>
            <div className="css">
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" onChange={props.doSearch}/>
            </div>

        </>
    );
}

export default SearchDirectory;