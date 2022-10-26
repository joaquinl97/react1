import './hooks1.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';




// import axios from 'axios';

function Hooks() {
    //UseState actualiza el estado de una variable 
    const [number, setNumber] = useState(0)

    useEffect(() => {
        document.title= `mi cuenta es ${number}`
        
    }, [number]);

    function sumar(params) {
        setNumber(number + 1)

    }

   

    // const AxiosPeticion = async () => {
    //     let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     console.log(response)
    // }
    // AxiosPeticion()


    return (
        <div>
            <div>
                Aqui llevo la cuena {number}
            </div>
            <Button onClick={() => sumar()}>Sumar</Button>
        </div>



    )

}

export default Hooks;