import React, {useState}  from 'react';
import LoginForm from './Components/LoginForm';

function App() {
  const adminUser = {
    username: "admin",
    password: "admin"
  }

  const [user,setUser] = useState({username: "", password: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        username: details.username,
        password: details.password
      })
    } 
    else{
      console.log("Invalid username or password. Hint: admin")
      setError("Invalid username or password. Hint: admin");
    }
  }

  const Logout = () => {
    setUser({username: "", password: ""});
  }

    return (
    <div className="App">
      {(user.username != "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.username} ~</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
} 

export default App;
