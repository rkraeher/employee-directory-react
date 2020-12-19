import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
//import Row from "../components/Row";
import RowContainer from '../components/RowContainer';
//import Sort from "../components/Sort";
import TableHeading from "../components/TableHeading";
import API from "../utils/API";

function General() {
    const [directory, setDirectory] = useState([]);
    const [sortCriteria, setSortCriteria] = useState();

    useEffect(() => {
        loadDirectory(sortCriteria);
    }, []);

    // OK so next, let's use the pupster/conditionals example and write a handle page change function. 
    // Send the directory down to row container, from there handle page view with directory as props, changing the rendered 
    // data based on the navbar onlick props

    // I think these sorting functions should happen another level down, in Row Container


    function sorting(directory) {
        const sorted = [].concat(directory)
            .sort((a, b) => a.last > b.last ? 1 : -1);
        return setDirectory(sorted);
    }

    function loadDirectory(sortName) {
        API.fullDirectory(sortName)
            .then(employees => {
                if (sortName) { //!!Not the place to do this manipulation
                    sorting(employees);
                } else {
                    return setDirectory(employees);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Container>
                <h1 className="text-center m-2">Employee Directory</h1>
                <table className="table table-dark m-3">
                    <TableHeading />
                    <RowContainer directory={directory} />
                </table>
            </Container>
        </div>
    );
}

export default General;