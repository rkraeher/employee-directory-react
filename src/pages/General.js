import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import API from "../utils/API";

function General() {
    const [directory, setDirectory] = useState([]);

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Container>
                <h1 className="text-center m-2">Employee Directory</h1>
                <table className="table table-dark m-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {directory.map((employee, index) =>
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