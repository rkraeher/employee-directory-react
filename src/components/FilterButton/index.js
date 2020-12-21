import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function FilterButton({ handleClick }) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Filter Results">
                <Dropdown.Item onClick={handleClick} data-value="5">5 results</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="10">10 results</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="20">20 results</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="50">50 results</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

//I want this dropdown out of the way, possibly in the navbar

export default FilterButton;