import { useState,useEffect } from "react"

import { useNavigate } from "react-router-dom"

import "./home.css"
import MakeMovieCard from "../movieItem/movie"
import Popup from "../popup/popup"

const HomePage = () => {
   const [apiData,setData] = useState([])
   const [status,setStatus] = useState("loading")
   const [isPopupOpen, setPopupOpen] = useState(false);

   const Navigate = useNavigate()

   const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };

    const LogOut = () => {
      localStorage.removeItem("userData")
      Navigate("/login")
    }

   useEffect(() => {
      const UserData = localStorage.getItem("userData")
      const FinalData = JSON.parse(UserData) 
      if (FinalData === null){
         return Navigate("/login")
      }
      const fetchData = async () => {
         try {
            const apiUrl = `https://hoblist.com/api/movieList`
            const options = {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                 category: 'movies',
                 language: 'kannada',
                 genre: 'all',
                 sort: 'voting',
               }),
             }
           const response = await fetch(apiUrl,options);
           const mainData = await response.json();
           console.log(mainData.result)
           setData(mainData.result);
           setStatus("success")
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
    },);

    const FinalStatus = status === "success"

   return(
      <div className="home-main-container">
         <nav className="navbar-container">
            <h1 className="nav-heading">Navbar</h1>
            <div>
               <button onClick={openPopup} className="company-info">Company Info</button>
               <button type="button" className="log-out" onClick={LogOut}>LogOut</button>
               <Popup isOpen={isPopupOpen} onClose={closePopup} />
            </div>
         </nav>
         <div className="movies-data-container">
            <ul className="movies-ul-container"> 
               {FinalStatus ? 
                  apiData.map(eachOne => (
                     <MakeMovieCard MovieDetails={eachOne} key={eachOne.id} />
                  )) :
                  <div className="loading-container">
                     <h1 className="loading-heading">Loading....</h1>
                  </div>
               }
            </ul>
         </div>
      </div>
   )
   
}

export default HomePage