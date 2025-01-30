import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


const CounterDisplay = () => {
    const {count} = useContext(CounterContext);

    return (
        <div>
            <h1>Current Count: {count}</h1>
        </div>
    )
}

export default CounterDisplay;