import React, { useState } from "react";
import "./style.css";
import DirectoryData from "../DirectoryData"



function DirectoryTable(props) {
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image </th>
                        <th class="carrot" scope="col" onClick={props.sortName}>Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.directory.map(personFacts => <DirectoryData key={personFacts.id} name={personFacts.name} image={personFacts.image} phone={personFacts.phone} email={personFacts.email} dob={personFacts.dob} />)}
                </tbody>
            </table>
        </>
    );
}

export default DirectoryTable;