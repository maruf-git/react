import './App.css'
import UserCard from './assets/components/UserCard'
import UseStateHook from './assets/components/UseStateHook'
function App() {
  return (
    <>
      <h1>From App</h1>
      <div className="card-container">
        <UserCard name="Robin Hood"></UserCard>
        <UserCard name="Arthur Sonny"></UserCard>
        <UserCard name="Victor Joy"></UserCard>
        <UserCard name="Harry Potter"></UserCard>
        <UserCard name="Real Mujib"></UserCard>
        <UserCard name="James luk"></UserCard>
        <UserCard name="Jim Marcos"></UserCard>
        <UserCard name="Carlo Brave"></UserCard>
        <UserCard name="Andre Fletcher"></UserCard>
        <UserCard name="Mark Joe"></UserCard>
      </div>
      <div style={{margin:"100px 0px"}}>
        <h1 style={{textAlign:"center"}}>UseState Hook:</h1>
        <UseStateHook random={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }} issa={50}
        amrArray={[10,20,30]}></UseStateHook>
      </div>


    </>
  )
}

export default App
