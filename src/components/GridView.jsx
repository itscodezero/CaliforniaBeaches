import React from 'react'
import { BiHandicap } from "react-icons/bi"
import { TbParking } from "react-icons/tb"
import { FaRestroom, FaDog,FaUmbrellaBeach } from "react-icons/fa"
import { GiBoatFishing, GiMoneyStack,GiSailboat } from "react-icons/gi"
import { FcCellPhone } from "react-icons/fc"
import ImageGallery from 'react-image-gallery';

/* receives beaches[] and shows in a grid. also include image gallary to display picures of the beach,
  services that are available at the beach and some other information. 
*/
export default function GridView(props) {
  const beaches = props.data || []
  return (
    beaches.map((dest) => {
        return (
          <div className="destination" key={dest.ID} >
            <ImageGallery items={dest.images} /> 
            <h3>{dest.NameMobileWeb}</h3>
            <p>{dest.DescriptionMobileWeb}</p>
            <div className="info">
              <div className="services">
                {dest.PARKING === "Yes" && <span title='Parking'><TbParking /></span> } 
                {dest.DSABLDACSS === "Yes" && <span title='Wheelchair Accessible'><BiHandicap /></span> } 
                {dest.RESTROOMS === "Yes" && <span title='Restrooms'><FaRestroom /></span>} 
                {dest.FEE === "No" && <span title='Entry fees'><GiMoneyStack /></span>  }
                {dest.DOG_FRIENDLY === "Yes" && <span title='Dog Friendly'><FaDog /></span> } 
                {dest.FISHING === "Yes" && <span title='Fishing allowed'><GiBoatFishing /></span> }
                {dest.SANDY_BEACH === "Yes" && <span title='Sandy Beach'><FaUmbrellaBeach /></span> }
                {dest.BOATING ===  "Yes" && <span title='Baoting allowed'><GiSailboat /></span> }
              </div>
              <h4><FcCellPhone/> {dest.PHONE_NMBR ? <a href={`tel: ${dest.PHONE_NMBR}`}> {dest.PHONE_NMBR} </a> : 'Not Available' }</h4>
            </div>
            <div className="distance">
              <span>Geo. Area: {dest.GEOGR_AREA}</span>
              <span>County: {dest.COUNTY}</span>
            </div>
          </div>
        );
      })
  )
}
