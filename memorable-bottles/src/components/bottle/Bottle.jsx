import "./Bottle.css"

const Bottle = (props) => {
    const { img, name, seller, price } = props.bottle;
    const handlePurchase = props.handlePurchase;
    return (

        <div className="bottle-container border border-red-400 rounded-lg flex flex-col justify-center items-center p-8">
            <div className="w-72">
                <img className="w-full object-cover" src={img} alt="" />
            </div>
            <h1>Name: {name}</h1>
            <h1>Seller: {seller}</h1>
            <h1>Price: {price}$</h1>
            <button className="btn" onClick={() => { handlePurchase(props.bottle) }}>Purchase</button>
        </div>
    );
};

export default Bottle;