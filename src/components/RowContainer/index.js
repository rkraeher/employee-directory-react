import React from "react";
import Row from "../Row";

//Make it so that Row is dynamic, and renders directory differently (sorted, filtered, as-is)
// To do this, I need to pass down some other props that say whether or not to sort/filter the directory. 

function RowContainer({ directory }) {
    return (
        <tbody>
            {directory
                .map((employee, index) =>
                    <Row
                        directory={employee}
                        index={index + 1}
                    />
                )}
        </tbody>
    )
}

export default RowContainer;