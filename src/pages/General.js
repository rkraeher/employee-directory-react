import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import FilterLetter from "../components/FilterLetter";
import { useEffect, useState } from "react";
import FilterNumber from "../components/FilterNumber";

function General() {
    const [directory, setDirectory] = useState([]);
    const [fullDir, setFullDir] = useState([]);
    const [dirLength, setDirLength] = useState(50);
    const [nameRange, setNameRange] = useState("A-Z");

    // const [allMatches, setMatches] = useState([]);
    // const [allNonMatches, setNonMatches] = useState([]);


    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);

            })
            .then(res => {
                setFullDir(directory)

            })
            .then(res => {
                grouping(fullDir);
            })
            .catch(err => console.log(err));
    }, []);

    function grouping(array) {
        let names = [];
        for (var i = 0; i < array.length; i++) {
            names.push(array[i].last);
            let lasts = [];
            for (var x = 0; x < names.length; x++) {
                lasts.push(names[x].charAt(0));
                const AE = /^[A-E]+$/g;
                var matches = [];
                var nonmatches = [];
                for (var y = 0; y < lasts.length; y++) {
                    if ((AE.test(lasts[y])) === true) {
                        matches.push(lasts[y]);
                    } else {
                        nonmatches.push(lasts[y]);
                    }
                }
                //I think I need to somehow return/extract these arrays - still can't get them on the console
                // Problem is that I end up with a one item array, one shows the letter, another an empty array. 
                // It isn't adding them into a larger array or I'm not consoling it correctly.
                console.log(matches);
                console.log(nonmatches);
            }
        }
    }



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
            {/* Add informational text: click on last and first name to sort */}
            {/* Add a button to return original array */}
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