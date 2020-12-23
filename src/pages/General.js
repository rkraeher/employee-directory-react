import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import FilterLetter from "../components/FilterLetter";
import { useEffect, useState } from "react";
import FilterNumber from "../components/FilterNumber";
import grouping from "../utils/Grouping";
import mergeSorted from "../utils/MergeSorted";
//import sortArray from "../utils/SortArray";

function General() {
    //This state changes and gets sent down
    const [directory, setDirectory] = useState([]);
    //This state keeps a record of the original, API fetch
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

    //TODO: Export this to clean up the component...
    //https://flaviocopes.com/how-to-export-multiple-functions-javascript/
    //https://github.com/airbnb/react-sketchapp/issues/185
    // Or, do it like the API example, wrap the functions inside the component. 
    //Not sure if this will work, because mergeSorted sets directory, 
    //so maybe I need to leave that here and import/export it to the grouping file.
    // function grouping(array, group) {
    //     var gotRange = getRange();
    //     var matches = [];
    //     var nonmatches = [];

    //     const getRange = () => {
    //         var range;
    //         switch (group) {
    //             case "AE":
    //                 return range = /^[A-E]+$/;
    //             case "FL":
    //                 return range = /^[F-L]+$/;
    //             case "MS":
    //                 return range = /^[M-S]+$/;
    //             case "TZ":
    //                 return range = /^[T-Z]+$/;
    //             default:
    //                 return range = /^[A-Z]+$/;
    //         }
    //     }
    //     // This loop organizes the directory based on an alphabetic chunk, and unshifts
    //     // the current queried chunk, so that it appears first in the client. 
    //     //TODO: (1) Grouping only works by last name. Add first name functionality. 
    //     //TODO: (2) Could be improved to ensure asynchronous execution.
    //     for (var i = 0; i < array.length; i++) {
    //         if ((gotRange.test(array[i].last.charAt(0)))) {
    //             matches.push(array[i]);
    //         } else {
    //             nonmatches.push(array[i]);
    //         }
    //         var sortedMatches = sortArray(matches, "last");
    //         var sortedNonMatches = sortArray(nonmatches, "last");
    //     }
    //     mergeSorted(sortedMatches, sortedNonMatches);
    // }

    // function mergeSorted(front, back) {
    //     var orderedTotal = front.concat(back);
    //     return setDirectory(orderedTotal);
    // }

    //TODO: Next, for cleaningup, import/export sortArray

    function sortArray(array, criteria) {
        const sorted = [].concat(array)
            .sort((a, b) => a[criteria] > b[criteria] ? 1 : -1);
        return sorted;
    }

    function handleClick(e) {
        e.preventDefault();
        const btnName = e.target.getAttribute("data-value");
        switch (btnName) {
            case "last":
                var sortedLast = sortArray(directory, "last");
                setDirectory(sortedLast);
                break;
            case "first":
                var sortedFirst = sortArray(directory, "first");
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
                // return grouping(directory, "AE");
                var orderedTotal = grouping(directory, "AE");
                setDirectory(orderedTotal);
                break;
            case "FL":
            //return Grouping(directory, "FL");
            case "MS":
            //return Grouping(directory, "MS");
            case "TZ":
            //return Grouping(directory, "TZ");
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
                <RowContainer directory={directory} filterNum={dirLength} />
            </table>

        </Container>
    );
}

export default General;
//Do these need to be their own components? export { mergeSorted, sortArray };