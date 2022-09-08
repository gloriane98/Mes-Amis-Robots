
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import "../styles/CardList.css";



function CardList(){
     
      const [robots, setRobots] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [loading, setLoading] = useState(false);
      
      const fecthRobots = () => {
       setLoading(true)
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
           {filtredRobots.map((robot) => (
           <div className='cards'>
           <img src={`https://robohash.org/${robot.id}`} alt={robot.name} className="style-image"/>
           <h4 className='title-name' key={robot.id}  >{robot.name}  </h4>
           <p className='style-email'>{robot.email} </p>
         </div>
        
        ))}
      </div>
        </>
 
            
    
    );
};
export default CardList;
 

























































/* import React, { useEffect, useMemo, useState } from "react";
import "../styles/CardList.css";



export default function CardList() {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getRobots = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const robots = await response.json();
        setRobots(robots);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRobots();
  }, []);



  const filtredRobots = useMemo(() => {
    if (robots.length && searchText.length >= 3) {
      return robots.filter((robot) =>
        robot.name.toUpperCase().includes(searchText.toUpperCase())
      );
    }
    return robots;
  }, [robots, searchText]);
 
  console.log(filtredRobots);



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
        {filtredRobots.map((robot) => (
           <div className='cards'>
           <img src={`https://robohash.org/${robot.id}`} alt={robot.name} className="style-image"/>
           <h4 className='title-name' key={robot.id}  >{robot.name}  </h4>
           <p className='style-email'>{robot.email} </p>
         </div>
        
        ))}
      </div>
     
    </>
  );
}  */



/* 
import React from 'react';
import { useEffect, useState } from "react";
import "../styles/CardList.css";
import InputSearch from "./InputSearch"


function CardList(){
     
      const [robots, setRobots] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [loading, setLoading] = useState(false);
      
      const fecthRobots = () => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            return response.json()
            
          })
          .then(data => {
            setUsers(data)
            setPosts(data)
          })
      }
    
      useEffect(() => {
        fecthRobots()
      }, [])
      setLoading(false);
   console.log(loading);
    return (
        <>
            <InputSearch value={searchTitle} onChange={setSearchTitle} />
         
      
            
           {loading ? (<h4>Loading...</h4>) : (posts.filter((value)=>{
             if(searchTitle=== ""){
               return value
             } else if(value.name.toUpperCase().includes(searchTitle.toUpperCase())){
               return value
             }
            }))} 
             {users.length > 0 && (
            <div className='container'>
             
              {users.map(user => (
                
                
                <div className='cards'>
                  <img src={`https://robohash.org/${user.id}`} alt={user.name} className="style-image"/>
                  <h4 className='title-name' key={user.id}>{user.name}  </h4>
                  <p className='style-email'>{user.email} </p>
                </div>
               

              ))}
              
            </div>
          )}
        </>
 
            
    
    );
};
export default CardList;
 

 */

