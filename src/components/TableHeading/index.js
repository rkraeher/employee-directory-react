import React from "react";

function handleOver(e) {
    e.target.style.background = "#6C757D";
}
function handleLeave(e) {
    e.target.style.background = "#343A40";
}

function TableHeading({ handleClick }) {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"
                    onClick={handleClick}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}
                    data-value="first">
                    First
                </th>
                <th scope="col"
                    onClick={handleClick}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}
                    data-value="last">
                    Last
                </th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
    )
}

export default TableHeading;