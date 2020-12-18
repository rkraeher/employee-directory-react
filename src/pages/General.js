//import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import API from "../utils/API";

// This component stores state and passes it down. I have to make it so that it only generates one array on page load, not new random ones every time. 
// Store state in parent, pass props down and map in child:
// https://stackoverflow.com/questions/59901709/passing-props-from-parent-to-child-and-loop-using-map-in-react

// I think I need a container for each Row component, so that for each iteration I get one Row component rendered. 

function General() {
    //const [counter, setCounter] = useState(0);
    // const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const [directory, setDirectory] = useState([]);

    useEffect(() => {
        //setCounter(1);
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    console.log(directory);
    //console.log(counter);

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
                        {directory.map(employee =>
                            <Row
                                directory={employee}
                            />
                        )}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default General;