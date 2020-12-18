import React from 'react';

function Row({ directory, index }) {
    const { first, last, email, phone } = directory;
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{first}</td>
            <td>{last}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default Row;