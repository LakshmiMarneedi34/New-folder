import {useState} from "react"
import {useNavigate} from "react-router-dom"

import "./signup.css"

const SignUp = () => {
   const [name,setName] = useState("")
   const [password,setPassword] = useState("")
   const [email,setEmail] = useState("")
   const [profession,setProfession] = useState("")
   const [mobileNumber,setMobileNumber] = useState("")

   const Navigate = useNavigate()


   const ChangeName = (event) => {
      setName(event.target.value)
   }
   const ChangePassword = (event) => {
      setPassword(event.target.value)
   }
   const ChangeEmail = (event) => {
      setEmail(event.target.value)
   }
   const ChangeProfession = (event) => {
      setProfession(event.target.value)
   }
   const ChangeMobileNumber = (event) => {
      setMobileNumber(event.target.value)
   }

   const SignUpButtonClicked = (event) => {
      event.preventDefault()
      if (name !== "" && password !== "" && email !== "" && profession !== "" && mobileNumber !== ""){
         console.log(name,password,email,profession,mobileNumber)
         const UserData = {
            name:name,
            password:password,
            email:email,
            profession:profession,
            mobileNumber:mobileNumber
         }
         localStorage.setItem("userData",JSON.stringify(UserData))
         alert("User Registered Successfully..")
         Navigate("/login")
      }else{
         alert("Please Provide All Details")
      }
   }
   const Login = () => {
      Navigate("/login")
   }
   return(
      <div className="signup-main-container">
         <form className="form-container" onSubmit={SignUpButtonClicked}>
            <h1 className="signup-heading">SignUp Page</h1>
            <div className="input-field">
               <label htmlFor="name" className="label">Name</label>
               <input type="text" id="name" value={name} placeholder="Please enter your Name" className="input" onChange={ChangeName}/>
            </div>
            <div className="input-field">
               <label htmlFor="password" className="label">Password</label>
               <input type="password" id="password" value={password} placeholder="Please set a Password" className="input" onChange={ChangePassword}/>
            </div>
            <div className="input-field">
               <label htmlFor="email" className="label">Email</label>
               <input type="email" id="email" value={email} placeholder="Please enter your Email" className="input" onChange={ChangeEmail}/>
            </div>
            <div className="input-field">
               <label htmlFor="phonenumber" className="label">Phone Number</label>
               <input type="tel" id="phonenumber" value={mobileNumber} placeholder="Please enter Mobile Number Ex:- 987654132" name="phone" className="input" onChange={ChangeMobileNumber}/>
            </div>
            <div className="input-field">
               <label htmlFor="professionSelect" className="label">Profession</label>
               <select id="professionSelect" value={profession} name="profession" className="input" onChange={ChangeProfession}>
                  <option value="student" selected>Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="engineer">Engineer</option>
                  <option value="doctor">Doctor</option>
                  <option value="artist">Artist</option>
                  <option value="developer">Developer</option>
                  <option value="scientist">Scientist</option>
                  <option value="writer">Writer</option>
               </select>
            </div>
            <div className="button-container">
               <button type="submit" className="signup-button">Sign Up</button>
               <button type="button" className="login-button" onClick={Login}>Login</button>
            </div>
         </form>
      </div>
   )
}

export default SignUp