import profile from "../../assets/images/profile.png"
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl">Knowledge Cafe</h1>
        <img src={profile} alt="profile picture of user" />
    </div>
  )
}



export default Header
