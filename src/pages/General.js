import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import FilterLetter from "../components/FilterLetter";
import { useEffect, useState } from "react";
import FilterNumber from "../components/FilterNumber";

//Filter works but always gives top 5/10 etc. alphabetically
// How can I get 5/10 randomly? Randomize the directory...
// Have another state that sends down the shortened one, to isolate the full 50 item array...
// Create a filter for lastName or firstName starts with

function General() {
    const [directory, setDirectory] = useState([]);
    const [dirLength, setDirLength] = useState(50);
    const [nameRange, setNameRange] = useState("A-Z");

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);

    // Maybe put this in another file?
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
            case "AE":
                return setNameRange("AE");
            case "FL":
                return setNameRange("FL");
            case "MS":
                return setNameRange("MS");
            case "TZ":
                return setNameRange("TZ");
            default:
                setDirLength(50);
                setNameRange("AZ");
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
            {/* See BS layout: https://react-bootstrap.netlify.app/layout/grid/ */}
            <div className="row justify-content">
                <div className="m-3">
                    <FilterNumber handleClick={handleClick} />
                </div>
                <div className="m-3">
                    <FilterLetter handleClick={handleClick} />
                </div>
            </div>
            <table className="table table-dark m-3">
                <TableHeading handleClick={handleClick} />
                <RowContainer directory={directory} filterNum={dirLength} filterLet={nameRange} />
            </table>

        </Container>
    );
}

export default General;