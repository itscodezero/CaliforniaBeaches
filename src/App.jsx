import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import TopNav from "./components/TopNav";
import Recommend from "./components/Recommend";
import GoToTop from "./components/GoToTop";
import Reviews from "./components/Reviews";
import { API_BASE_URL } from "./constants/appConstants";
import { locations } from './mock-data/locations'
import 'react-image-gallery/styles/css/image-gallery.css';
export default function App() {

  const [beaches,setBeaches] = useState([])
  
  useEffect(() => {
    getBeaches()
  }, []);

  const getBeaches = async() => {
    const data = await fetch(
      `${API_BASE_URL}`
    ).then((response) => response.json());
   
    if(data)
      setBeaches(data) //assign data received from api to the state. 
    else
      setBeaches(locations) // use mock data in case the api is down.
  }

 
  return (
    <div>
      <GoToTop />
      <TopNav />
      <TopBanner data={beaches} />
      <Recommend data={beaches} />
      <Reviews />
      <Footer />
    </div>
  );
}

