import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import FilterButton from "../components/FilterButton";
import { useEffect, useState } from "react";

function General() {
    const [directory, setDirectory] = useState([]);
    const [dirLength, setDirLength] = useState(50);

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    function handleClick(e) {
        e.preventDefault();
        const btnName = e.target.getAttribute("data-value");
        switch (btnName) {
            case "last":
                return sortCol("last");
            case "first":
                return sortCol("first");
            case "5":
                return setDirLength(5);
            case "10":
                return setDirLength(10);
            case "20":
                return setDirLength(20);
            case "50":
                return setDirLength(50);
            default:
                setDirLength(50);
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
            <h1 className="text-center m-3">
                Employee Directory
            </h1>

            <div className="text-center m-3">
                <FilterButton handleClick={handleClick} />
            </div>

            <table className="table table-dark m-3">
                <TableHeading handleClick={handleClick} />
                <RowContainer directory={directory} filter={dirLength} />
            </table>
        </Container>
    );
}

export default General;