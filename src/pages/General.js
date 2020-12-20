import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import { useEffect, useState } from "react";

// Create a filter button component
// Button should drop down to filter results in to 5, 10, 20, or 50 results in API

function General() {
    const [directory, setDirectory] = useState([]);

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    function handleSort(e) {
        e.preventDefault();
        const btnName = e.target.getAttribute("data-value");
        switch (btnName) {
            case "last":
                return sortCol("last");
            case "first":
                return sortCol("first");
            default:
                return directory;
        }
    }

    function sortCol(criteria) {
        const sorted = [].concat(directory)
            .sort((a, b) => a[criteria] > b[criteria] ? 1 : -1);
        setDirectory(sorted);
    }

    return (
        <Container>
            <h1 className="text-center m-2">Employee Directory</h1>
            <table className="table table-dark m-3">
                <TableHeading handleClick={handleSort} />
                <RowContainer directory={directory} />
            </table>
        </Container>
    );
}

export default General;