//Defining state inside function component

import React, {useState} from "react";

function HooksComponent () {
    const [title] = useState('Welcome to Edureka!!');
    return (
        <div>
            <center>
                <h2>{title}</h2>
            </center>
        </div>
    )
}

export default HooksComponent;