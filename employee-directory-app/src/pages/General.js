import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
//import Row from "../components/Row";
//import API from "../utils/API";

function General() {
    const [num, setNum] = useState(0);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [directory, setDirectory] = useState([]);

    // useEffect(() => {

    //     API.fullDirectory()
    //         .then(res => {
    //             // if (res.data.status === "error") {
    //             //     throw new Error(res.data.message)
    //             // }
    //             const employees = res.data.results;
    //             setDirectory(employees);
    //             renderEmployees(directory);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    useEffect(() => {
        Axios("https://randomuser.me/api/?results=20")
            .then(res => {
                const employees = res.data.results;
                setDirectory(employees);
                console.log(employees);
            })
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