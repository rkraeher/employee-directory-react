import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, filter }) {
    const [employees, setEmployees] = useState(directory);
    useEffect(() => {
        const array = directory.slice(0, filter);
        setEmployees(array);
    }, [filter, directory]);

    return (
        <tbody>
            {employees
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