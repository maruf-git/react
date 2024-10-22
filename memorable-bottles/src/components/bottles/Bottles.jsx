import "./Bottles.css"
import Bottle from "../bottle/Bottle"
import { useState } from "react";
import { useEffect } from "react";
import BottleImgs from "../bottleImgs/BottleImgs";


const Bottles = () => {
    // handle bottles state
    const [bottles, setBottles] = useState([]);
    // fetch and load bottles
    useEffect(() => {
        fetch("bottles.json")
            .then(response => response.json())
            .then(data => setBottles(data));
    }, [])

    // handle purchase
    const [bottleImgs, setBottleImgs] = useState([]);
    const handlePurchase = (bottle) => {
        const { img, name, id, seller, price } = bottle;
        setBottleImgs([...bottleImgs, img]);
        console.log(bottleImgs);
    }

    return (
        <div>
            {/* purchased bottles */}
            <div className="flex flex-wrap">
                {/* method-1 */}
                {bottleImgs.map((img, idx) => {
                    return (
                        <div className="h-20" key={idx}>
                            <img className="h-full" src={img} alt="" />
                        </div>
                    )
                })}
                {/* method-2 */}
                {/* {bottleImgs.map((img,idx) => <BottleImgs key={idx} img={img}></BottleImgs>)} */}
            </div>
            {/* bottles list */}
            <div className="bottles-container grid grid-cols-3 gap-10">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handlePurchase={handlePurchase}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;