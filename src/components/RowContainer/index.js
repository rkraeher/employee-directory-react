import React from "react";
import Row from "../Row";

function RowContainer({ directory }) {

    return (
        <tbody>
            {directory
                .map((employee, index) =>
                    <Row
                        directory={employee}
                        index={index + 1}
                        key={index}
                    />
                )}
        </tbody>
    )
}

export default RowContainer;