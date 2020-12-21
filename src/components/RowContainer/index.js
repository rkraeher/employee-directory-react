import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, filterNum, nameRange }) {
    const [employees, setEmployees] = useState(directory);
    useEffect(() => {
        const array = directory.slice(0, filterNum);
        filterName(nameRange, directory);
        setEmployees(array);
    }, [filterNum, directory]);

    function filterName(nameRange, fullArray) {
        const AE = /^[A-E]+$/;
        console.log(AE);
        const FL = /^[F-L]+$/;
        const MS = /^[M-S]+$/;
        const TZ = /^[T-Z]+$/;
        let rangeArray = [];


        for (let i = 0; i < fullArray.length; i++) {
            let empLast = fullArray[i].last;
            console.log(typeof empLast);
            console.log(AE.test(empLast));
            console.log(empLast);
            // Just prints all false

            //Try: https://stackoverflow.com/questions/14978625/regex-to-check-whether-string-starts-with-ignoring-case-differences
        }
    }

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