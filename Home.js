import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const {proData}=useSelector(state=>state.product);
    const dispatch=useDispatch();
    return (
        <div>
            <h2> Products </h2>
            <ul>
                {proData.map((pro,ind)=>
                <li key={ind}>pro</li>
                )}
            </ul>
            <button onClick={()=>dispatch()}> Add</button>
        </div>
    )
}