import React from "react";
import "./style.css";

function DirectoryData(props) {
    return (
        <>
                <tr>
                    <td><img src={props.image} alt={props.name} /></td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
        </>
    );
}

export default DirectoryData;