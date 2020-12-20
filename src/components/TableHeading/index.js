import React from "react";

function TableHeading({ handleClick }) {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" onClick={handleClick} data-value="first">First</th>
                <th scope="col" onClick={handleClick} data-value="last">Last</th>
                <th scope="col" >Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
    )
}

export default TableHeading;