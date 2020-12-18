import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
//import Sort from "../components/Sort";
import TableHeading from "../components/TableHeading";
import API from "../utils/API";

function General() {
    const [directory, setDirectory] = useState([]);
    let criteria = true;

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    //This consoles correctly but having trouble avoiding an infinite loop when I try to render it
    // Something to do with API call
    // Perhaps this needs to be sent down as props and the manipulated so that I'm not re-rendering the page,
    //because if I change the state I end up fetching again from the API.
    // Send the directory down as props, sort it, send it back up and then the sorted
    // array gets send down as props again to the next component.

    function sorting() {
        const sorted = [].concat(directory)
            .sort((a, b) => a.last > b.last ? 1 : -1);
        return setDirectory(sorted);
    }

    return (
        <div>
            <Container>
                <h1 className="text-center m-2">Employee Directory</h1>
                <table className="table table-dark m-3">
                    <TableHeading />
                    <tbody>
                        {directory //instead of sorting from directory this will become the sorted array.
                            .map((employee, index) =>
                                <Row
                                    directory={employee}
                                    index={index + 1}
                                />
                            )}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default General;