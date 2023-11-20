import {useState} from "react"
import {useNavigate} from "react-router-dom"


import "./login.css"

const Login = () => {
   const [UserName,setName] = useState("")
   const [UserPassword,setPassword] = useState("")
   const [error,setError] = useState(false)
   const [nullInput,setNullInut] = useState(false)
   const [NameError,setNameError] = useState(false)
   const [PasswordEmpty,setPasswordEmpty] = useState(false)

   const Navigate = useNavigate()

   const ChangeName = (event) => {
      setName(event.target.value)
   }
   const ChangePassword = (event) => {
      setPassword(event.target.value)
   }

   const SignUp = () => {
      Navigate("/signup")
   }

   const LoginButtonClicked = (event) => {
      event.preventDefault()
      if (UserName !== "" && UserPassword !== ""){
         const UserData = localStorage.getItem("userData")
         const FinalData = JSON.parse(UserData)
         console.log(FinalData)
         if (FinalData !== null){
            const {name,password} = FinalData
            if (name === UserName && password === UserPassword){
               setError(false)
               Navigate("/")
            }else{
               setError(true)
            }
         }else{
            setError(true)
         }
      }else{
         if (UserName === "" && UserPassword === ""){
            setNullInut(true)
         }else if (UserName === ""){
            setNameError(true)
            setNullInut(false)
            setPasswordEmpty(false)
         }else if (UserPassword === ""){
            setPasswordEmpty(true)
            setNameError(false)
            setNullInut(false)
         }
         
      }
   }

   return(
      <div className="login-main-container">
         <form className="login-form-container" onSubmit={LoginButtonClicked}>
            <h1 className="login-heading">Login Page</h1>
            <div className="login-input-field">
               <label htmlFor="name" className="label">Name</label>
               <input type="text" id="name" value={UserName} placeholder="Please enter your Name" className="input" onChange={ChangeName}/>
            </div>
            <div className="input-field">
               <label htmlFor="password" className="label">Password</label>
               <input type="password" id="password" value={UserPassword} placeholder="Please set a Password" className="input" onChange={ChangePassword}/>
            </div>
            {error && <p className="error-message">Please Enter Valid Credentials</p>}
            {nullInput && <p className="error-message">Please enter valid Name & Password</p>}
            {NameError && <p className="error-message">Please enter valid Name</p>}
            {PasswordEmpty && <p className="error-message">Please enter valid Password</p>}
            <div className="login-button-container">
               <button type="submit" className="login-signup-button">Login</button>
               <button type="button" className="login-login-button" onClick={SignUp}>Sign Up</button>
            </div>
         </form>
      </div>
   )
}

export default Login