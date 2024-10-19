const FunctionAsProps = (props) => {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px"}}>
            {props.children}
            <div style={{display:"flex", gap:"10px"}}>
                <button onClick={props.handleIncrease}>Click Me To Increase Value</button>
                <button onClick={props.handleDecrease}>Click Me To Decrease Value</button>
            </div>
        </div>
    )
}
export default FunctionAsProps;