import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, filterNum }) {
    const [employees, setEmployees] = useState(directory);

    useEffect(() => {
        const array = directory.slice(0, filterNum);
        setEmployees(array);
    }, [filterNum, directory]);

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