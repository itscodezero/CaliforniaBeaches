import { useState, useEffect } from "react";
import FallbackImage from '../assets/FallbackBeach.jpg'

//shows different beach images every 2 seconds from available beaches data
export function Slideshow(props) {
  const [data,setData] = useState()

 useEffect(() => {
  setTimeout(() => {
    if(props.data && typeof props.data ==='object' && props.data.length>0) {
      const d= props.data[getRandomInt(0,props.data.length-1)] //select one beach.
      if(d.Photo_1) 
        setData(d)
    }
  }, 2000);
 
   return () => {
     clearInterval()
   }
 }, [props])
 
  

  function getRandomInt(min, max) { // returns random integer value from the specified range.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
 
return (  
    data ?  <img alt="BeachImage" src={data.Photo_1}></img> 
         :  <img alt="BeachImage" src={FallbackImage}></img> /* if no beach available, show default image */
   );
}

