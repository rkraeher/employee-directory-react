import Container from "../components/Container";
import RowContainer from '../components/RowContainer';
import TableHeading from "../components/TableHeading";

function Sorted({ page, directory }) {

    return (
        <Container>
            <h1 className="text-center m-2">Employee Directory</h1>
            <table className="table table-dark m-3">
                <TableHeading />
                <RowContainer directory={directory} currentPage={page} />
            </table>
        </Container>
    );
}

export default Sorted;