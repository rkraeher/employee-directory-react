import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function FilterButton() {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Filter Results">
                <Dropdown.Item href="#/action-1">5 results</Dropdown.Item>
                <Dropdown.Item href="#/action-2">10 results</Dropdown.Item>
                <Dropdown.Item href="#/action-3">20 results</Dropdown.Item>
                <Dropdown.Item href="#/action-3">50 results</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

//I want this dropdown out of the way, possibly in the navbar

export default FilterButton;