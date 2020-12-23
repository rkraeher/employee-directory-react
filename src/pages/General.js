import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import FilterLetter from "../components/FilterLetter";
import { useEffect, useState } from "react";
import FilterNumber from "../components/FilterNumber";
import Grouping from "../utils/Grouping";
import SortArray from "../utils/SortArray";

const style = { display: "flex", justifyContent: "center" };

function General() {
    //This state changes and gets sent down
    const [directory, setDirectory] = useState([]);
    //This state keeps a record of the original API fetch
    const [fullDir, setFullDir] = useState([]);
    //This state is for result length
    const [dirLength, setDirLength] = useState(50);

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .then(res => {
                setFullDir(directory);
            })
            .catch(err => console.log(err));
    }, []);

    function handleClick(e) {
        e.preventDefault();
        const btnName = e.target.getAttribute("data-value");
        switch (btnName) {
            case "last":
                var sortedLast = SortArray.sortArray(directory, "last");
                setDirectory(sortedLast);
                break;
            case "first":
                var sortedFirst = SortArray.sortArray(directory, "first");
                setDirectory(sortedFirst);
                break;
            case "5":
                return setDirLength(5);
            case "10":
                return setDirLength(10);
            case "20":
                return setDirLength(20);
            case "50":
                return setDirLength(50);
            case "AE":
                var orderedTotal = Grouping.grouping(directory, "AE");
                setDirectory(orderedTotal);
                break;
            case "FL":
                var orderedTotal = Grouping.grouping(directory, "FL");
                setDirectory(orderedTotal);
                break;
            case "MS":
                var orderedTotal = Grouping.grouping(directory, "MS");
                setDirectory(orderedTotal);
                break;
            case "TZ":
                var orderedTotal = Grouping.grouping(directory, "TZ");
                setDirectory(orderedTotal);
                break;
            default:
                setDirLength(50);
                return setDirectory(fullDir);
        }
    }

    return (
        <Container>
            <h1 className="text-center m-3">
                Employee Directory
            </h1>
            <div className="row" style={style}>
                <div className="m-3">
                    <FilterNumber handleClick={handleClick} />
                </div>
                <div className="m-3">
                    <FilterLetter handleClick={handleClick} />
                </div>
            </div>
            <div className="row">
                <table className="table table-dark m-3">
                    <TableHeading
                        handleClick={handleClick} />
                    <RowContainer
                        directory={directory}
                        filterNum={dirLength} />
                </table>
            </div>
        </Container >
    );
}

export default General;