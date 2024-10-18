import "./UserCard.css"
const UserCard = (props) => {
    return (
        // card component
        <div className="card">
            <div className="img-container">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1729230425~exp=1729234025~hmac=9d4a6198dd1560dd3f4ad324467388269d159e92f4bf53e9625502c0998369bd&w=996"></img>
            </div>
            <h3>{props.name}</h3>
            <p>Front End Developer</p>
        </div>
    )
}

export default UserCard;