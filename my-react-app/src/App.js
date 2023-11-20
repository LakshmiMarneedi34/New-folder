import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css';
import SignUp from "./components/signup/signup";
import Login from "./components/login/login";
import HomePage from "./components/home/home";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;