import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { groupBy , getImageUrlsByRegex } from "../libs/index"; 
import missing_img from "../assets/missing_image.jpg"
import GridView from "./GridView";
import Spinner from "./Spinner";

//shows list of beaches based on the region in california with tabs and search function.
export default function Recommend(props) {

  const [beaches,setBeaches] = useState([])
  const [filteredBeaches,setFilteredBeaches] = useState([])
  const [categories,setCategories] = useState([])
  const [active, setActive] = useState(1)
  const [tab, setTab] = useState('')
  const [searchTerm,setSearchTerm] = useState('')

  useEffect(() => {
    //transform the data to match our screen elements
    setBeaches(transformTheData(props.data))
  },[props.data])


  useEffect(()=> {
    //set tabs 
    setCategories(Object.keys(beaches))
  },[beaches])

  useEffect(() => {
    //set default to first tab on page load
    if(categories[0]) {
      setTab(categories[0])
      setFilteredBeaches(beaches[categories[0]])
    }
  },[categories,beaches])


  useEffect(() => {
    //when tab is changed, filter the beaches
    doBeachFilter(searchTerm)
  }, [tab])
  
  
  const transformTheData = (data) => { 
     let tData = [];
     if(!data) { return tData }

     tData = data.map( d => {
        const images= getImageUrlsByRegex(d,'^Photo_') // get photos in images array. 
        d.images=[]
        if(images.length <=1)
          d.images.push({original:missing_img,thumbnail:missing_img}) //insert default image if no photos present
        else
          d.images = images.map(i=> { return {original:i, thumbnail: i} }) //transfort object to feed image gallery
        
        return d;
     })
     tData=tData.sort((a,b)=> b.images.length-a.images.length) //push the beaches with no pictures to the end

      tData=groupBy(tData,'DISTRICT'); // group by District 
     
      return tData;
    }

  const handleTabChange = (cat,index) => {
    setActive(index)
    setTab(cat)
  }
 
 
  let filterTimeout
  const doBeachFilter = query => {
    //search term could be string or a object from the input element so be careful. 
    const searchTxt = typeof query === "string"? query : query && query.target ? query.target.value:''
    setSearchTerm(searchTxt)
  
    clearTimeout(filterTimeout)
    
    if (!searchTxt) return setFilteredBeaches(beaches[tab]) //if blank search text, return data based on tab selected.

    filterTimeout = setTimeout(() => {  //timeout used to debounce user input so the search will be triggered when user stops typing.
    try {
      //filter the beaches matching the search term with the name or description, and from the currenly selected tab.
      setFilteredBeaches(beaches[tab].filter(
        b => b.NameMobileWeb.toLowerCase().includes(searchTxt.toLowerCase()) || b.DescriptionMobileWeb.toLowerCase().includes(searchTxt.toLowerCase())
      ))
    } catch (error) {
      console.log("Something went wrong with the filter, sending all data from selected tab")
      setFilteredBeaches(beaches[tab])
    }
    }, 500)
  }                       

  return (
   <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
        { categories.length ===0 && <Spinner/> }
      </div>
      
      <div className="packages">
        <ul>
          {categories.map((cat, index) => {
            return (
              <li
               key={cat}
                className={active === index + 1 ? "active" : ""}
                onClick={() => handleTabChange(cat,index+1)}
              >
                {cat.slice(2)}
              </li>
            );
          })}
          <li key='search'>
          { categories.length!==0 &&  <div className="search">
              <div className="container">
                <label>Looking for specific beaches?</label>
                <input type="text" placeholder="Type name or description..." onChange={doBeachFilter} />
              </div>
            </div>
          }
          </li>
        </ul>
        
      </div>
      
      <div className="destinations">
        <GridView data={filteredBeaches} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
    .search {
      display: inline-flex;
      background-color: #ffffffce;
      .container {
        display: inline-grid;
        line-height:1.5rem;
        align-items: right;
        justify-content: right;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border:none;
          text-align: center;
          color: black;
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  
  
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
     
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
