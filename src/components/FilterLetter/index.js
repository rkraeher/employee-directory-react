import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function FilterLetter({ handleClick }) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Filter Names">
                <Dropdown.Item onClick={handleClick} data-value="AE">A-E</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="FL">F-L</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="MS">M-S</Dropdown.Item>
                <Dropdown.Item onClick={handleClick} data-value="TZ">T-Z</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default FilterLetter;