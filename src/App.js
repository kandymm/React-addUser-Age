import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLİsts";
import { useState } from "react";


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserLists users={usersList}/>
    </div>
  );
}

export default App;
