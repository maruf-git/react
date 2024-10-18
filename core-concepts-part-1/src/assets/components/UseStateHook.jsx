import { useState } from "react";
import "./UseStateHook.css"
const UseStateHook = (props) => {
    // use state hook
    const [count, setCount] = useState(10);
    //value check
    console.log("props: ",props);
    console.log("props style: ",props.check);
    console.log("issa: ",props.issa);
    console.log("amrArray :",props.amrArray);
    // rendering
    return (
        <div style={props.random}>
            <p>Count : {count}</p>
            <div style={{ display: "flex", gap: "5px" }}>
                <button className="btn" onClick={() => { setCount(count+1);console.log("inc") }}>Increase</button>
                <button className="btn" onClick={() => { setCount(count-1);console.log("dec") }}>Decrease</button>
            </div>
        </div>
    )
}
export default UseStateHook;