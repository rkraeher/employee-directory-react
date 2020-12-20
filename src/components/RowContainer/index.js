import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, currentPage }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        handlePage(currentPage);
    }, []);

    function sorting(directory) {
        const sorted = [].concat(directory)
            .sort((a, b) => a.last > b.last ? 1 : -1);
        setEmployees(sorted);
    }

    function handlePage(page) {
        if (currentPage === "general") {
            setEmployees(directory);
        } else if (currentPage === "sorted") {
            sorting(directory);
        } else {
            setEmployees(directory);
        }
    }

    return (
        <tbody>
            {directory
                .map((employee, index) =>
                    <Row
                        directory={employee}
                        index={index + 1}
                        key={index}
                    />
                )}
        </tbody>
    )
}

export default RowContainer;