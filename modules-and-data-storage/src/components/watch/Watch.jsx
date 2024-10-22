
const Watch = ({ sendProto, res, name }) => {
    // const { brand, id, price } = props.sendProto;
    // console.log("watch: ", props);
    // console.log("details: ", brand, id, price);
    // const res=props.res;
    // console.log("Result:",res);
    // const greet  = props.name;
    // console.log(greet);
    console.log("name is:", name);
    console.log("res is:", res);
    console.log("sendProto", sendProto);
    const { id, brand, price } = sendProto;
    return (
        <div className="flex flex-col justify-center items-center border border-red-500 h-80">
            <p>Brand Name: {brand}</p>
            <p>Product Id: {id}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;