import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, filterNum, nameRange }) {
    const [employees, setEmployees] = useState(directory);

    useEffect(() => {
        const array = directory.slice(0, filterNum);
        //filterName(nameRange, directory);
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