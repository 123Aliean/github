import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function Counter () {
    const {count}=useSelector(state=>state.counter);
    const dispatch=useDispatch();
    return (
        <div>
           <h2> Redux counter example </h2>
           <p> The store count value is {count}</p>
           <button onClick={()=> dispatch({type:'INC',payload:2})}>Increment</button>
           <button onClick={()=> dispatch({type: 'DEC', payload:1})}>Decreament</button>
        </div>
    )
}