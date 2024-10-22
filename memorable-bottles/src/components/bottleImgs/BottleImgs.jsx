
const Imgs = ({img}) => {
    console.log("img props:",img);
    return (
        <div>
            <div className="h-20">
                
                <img className="h-full" src={img} alt="" />
            </div>
        </div>
    );
};

export default Imgs;