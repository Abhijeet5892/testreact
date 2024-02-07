import React, { useReducer} from 'react'

const Usereducer = () => {
    // const [count, setCount] = useState(0);
    const initialState = 0;

    const reducer = (state, action) =>{
      console.log(state,action);
      if (action.type === "incr") {
        return state + 1;
      }

      if (action.type === "decr") {
        return state - 1;
      }

    }

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({type: "incr"})}>incr</button>
      <button onClick={() => dispatch({type: "decr"})}>dec</button>
    </div>
  )
}

export default Usereducer
