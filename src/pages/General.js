import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";
import API from "../utils/API";
import { useEffect, useState } from "react";

function General() {
    const [directory, setDirectory] = useState([]);

    // function loadDirectory() {
    //     API.fullDirectory()
    //         .then(employees => {
    //             setDirectory(employees);
    //         })
    //         .catch(err => console.log(err));
    // }

    //sorting in here setState accordingly
    //onclick event on table heading

    useEffect(() => {
        API.fullDirectory()
            .then(employees => {
                setDirectory(employees);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <Container>
            <h1 className="text-center m-2">Employee Directory</h1>
            <table className="table table-dark m-3">
                <TableHeading />
                <RowContainer directory={directory} />
            </table>
        </Container>
    );
}

export default General;