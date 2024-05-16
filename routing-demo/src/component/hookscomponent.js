//Defining state inside function component

import React, {useState} from "react";

function HooksComponent () {
    const [title] = useState('Welcome to Edureka!!');

    //setting state
    const [count, setCount] = useState(0)
    return (
        <div>
            <center>
                <h2>{title}</h2>
                <p>{count}</p>
                <button onClick={() => {setCount(count+1)} }>
                    Enroll
                </button>
            </center>
        </div>
    )
}

export default HooksComponent;