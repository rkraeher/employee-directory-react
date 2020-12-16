import React, { useState, useEffect } from "react";
// import the API?
import Container from "../components/Container";
import Row from "../components/Row";

function General() {
    // useState variables

    // useEffect function to call the API

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
                    <Row />
                </table>
            </Container>
        </div>
    );
}

export default General;