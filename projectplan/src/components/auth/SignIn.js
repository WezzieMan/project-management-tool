import { useState } from "react"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${email} and  ${password}`)
  }

  return (  
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>

        <div className="input-field">
          <input type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-field">
          <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}
 
export default SignIn;