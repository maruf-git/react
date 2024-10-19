import "./ChildrenAsProps.css"

const ChildrenAsProps=(props)=>{
    return (
        <div className="props-container">
           {props.children}
        </div>
    )
}

export default ChildrenAsProps;