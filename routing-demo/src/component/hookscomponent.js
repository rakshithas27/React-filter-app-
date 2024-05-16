
import React, {useState, useEffect} from "react";


function HooksComponent () {
    const [title] = useState('Welcome to Edureka!!');
    const [count, setCount] = useState(0)
    const [topics, setTopics] = useState([])

    useEffect(() => {
        const fetchTpoics = async () => {
            const data = ['Component', 'Lifecycle', 'States', 'Props', 'Redux', 'Hooks', 'Routing']
            setTopics(data)
        }
        fetchTpoics();
    }, []);

    return (
        <div>
            <center>
                <h2>{title}</h2>
                <p>{count}</p>
                <button onClick={() => {setCount(count+1)} }>
                    Enroll
                </button>
                <h3>Important Topics That we cover:</h3>
                <div>
                    {topics.map((topic,index) => {
                        return <li key = {index}>{topic}</li>       
                    })}
                </div>  
            </center>
        </div>
    )
}

export default HooksComponent;




