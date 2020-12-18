//import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
//import Row from "../components/Row";
import API from "../utils/API";

// This component stores state and passes it down. I have to make it so that it only generates one array on page load, not new random ones every time. 
// Store state in parent, pass props down and map in child:
// https://stackoverflow.com/questions/59901709/passing-props-from-parent-to-child-and-loop-using-map-in-react

// I think I need a container for each Row component, so that for each iteration I get one Row component rendered. 

function General() {
    const [num, setNum] = useState(0);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [directory, setDirectory] = useState([]);

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    console.log(directory);

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
                        {/* I mean this is working but it should really be set up to pass the directory state down to the Row component and then render this list. */}
                        {directory.map((employee, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.cell}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default General;