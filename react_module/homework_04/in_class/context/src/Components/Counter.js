import { useContext } from 'react';
import { CountContext } from '../context/Count';

const Counter = () => {
    const {count,setCount} = useContext(CountContext)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
