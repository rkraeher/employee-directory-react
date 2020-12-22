import React, { useEffect, useState } from "react";
import Row from "../Row";

function RowContainer({ directory, filterNum, nameRange }) {
    const [employees, setEmployees] = useState(directory);
    useEffect(() => {
        const array = directory.slice(0, filterNum);
        //filterName(nameRange, directory);
        setEmployees(array);
    }, [filterNum, directory]);

    const getSections = () => {
        if (directory.length === 0) {
            return [];
        }
        return Object.values(
            directory.reduce((acc, name) => {
                let firstLetter = name.last[0].toLocaleUpperCase();
                if (!acc[firstLetter]) {
                    acc[firstLetter] = { letter: firstLetter, data: [name.last] };
                } else {
                    acc[firstLetter].data.push(name.last);
                }
                console.log(acc);
                return acc;
            }, {})
        );
    }
    console.log(directory.reduce(getSections));
    //Ok so this^ prints sometimes, other times 'can't reduce empty array' I think it is getting stuck and running before the mounting process happens and populates the array. 
    // If I sort alphabetically first, it console logs the alphabetic sections in alphabetic order


    // function filterName(nameRange, fullArray) {
    //     const AE = /^[A-E]+$/;
    //     console.log(AE);
    //     const FL = /^[F-L]+$/;
    //     const MS = /^[M-S]+$/;
    //     const TZ = /^[T-Z]+$/;
    //     let rangeArray = [];


    //     for (let i = 0; i < fullArray.length; i++) {
    //         let empLast = fullArray[i].last;
    //         console.log(typeof empLast);
    //         console.log(AE.test(empLast));
    //         console.log(empLast);
    //         // Just prints all false

    //         //Try: https://stackoverflow.com/questions/14978625/regex-to-check-whether-string-starts-with-ignoring-case-differences
    //         // Or: Phone tabs about using the reduce method
    //     }
    // }

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