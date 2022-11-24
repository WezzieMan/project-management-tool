import { useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${email} and  ${password} by ${firstName} ${lastName}`)
  }

  return (  
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <input type="text" id="firstName" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
        </div>

        <div className="input-field">
          <input type="text" id="lastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
        </div>

        <div className="input-field">
          <input type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="input-field">
          <input type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
 
export default SignUp;