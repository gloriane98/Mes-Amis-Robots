
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import "../styles/CardList.css";
import {Link} from "react-router-dom";
import Loader from './Loader';



function CardList(){
     
      const [robots, setRobots] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [loading, setLoading] = useState(true);
      
      const fecthRobots = () => {
      
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            return response.json()
           
          })
          .then(data => {
            setRobots(data)
            setLoading(false)
          })
      }
    
      useEffect(() => {
        fecthRobots()
      }, [])
     const filtredRobots = useMemo(() => {
    if (robots.length && searchText.length >= 3) {
      return robots.filter((robot) =>
        robot.name.toUpperCase().includes(searchText.toUpperCase())
      );
    }
    return robots;
  }, [robots, searchText]);
  
  
    return (
        <>
             <div className="style-input">
                <input 
                onChange={(e)=>setSearchText(e.target.value)}
                type="search" 
                className="search"
                id = "Isearch "
                name ="Isearch" 
                placeholder="Rechercher par nom" 

                />
            
           </div> 
            <div className="container">
           {
           !loading?
           filtredRobots.map((robot) => (
           <div className='cards'>
            
           <Link className='style-bot' to = {`robot/${robot.id} `} >
           <img src={`https://robohash.org/${robot.id}`} alt={robot.name} className="style-image"/>
           <h4 className='title-name' key={robot.id}  >{robot.name}  </h4>
           <p className='style-email'>{robot.email} </p>
           </Link> 
        
         </div>
        
        )):<Loader/>
      }
      </div>
        </>
 
            
    
    );
};
export default CardList;
 