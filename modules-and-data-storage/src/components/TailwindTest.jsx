import "./TailwindText.css"
const TailwindTest = () => {
    return (

        <div>
            <div className="card card-1 flex flex-col justify-center items-center border border-red-500 rounded-lg">
                <div className="h-48 w-48">
                    <img className="h-full w-full object-cover rounded-full" src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1729578150~exp=1729581750~hmac=dafdd46eb146d20be49af5481780453aa2513b40850377419f7de6b4fb88320a&w=996" alt="" />
                </div>
                <p>Mr John Wick</p>
            </div>
        </div>
    );
};

export default TailwindTest;