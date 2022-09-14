import React from 'react';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import "../styles/DetailRobot.css"


function DetailRobot () {
     const [robot, setRobot] = useState({});
     const [loading, setLoading] = useState(true);
           
     let {id} = useParams();
       

     const TourneRobots = () =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          return response.json()
         
        })
        .then(data => {
          setRobot(data)
          setLoading(false)

        })
     }
   
      console.log(robot);
    
    useEffect(() => {
        TourneRobots()
      }, [])
   
    
        if(!robot){
           return <div>
            
           </div>
        }

        
            
            return(
                    
            <div className='details-bot'>
                {
                    !loading?

            <div className="card-bot">
                <img src={`https://robohash.org/${robot.id}`} alt={robot.name} className="robot-id"/>
                <div className='text-robot'>
                  <p className='paraph1'> {robot.name} </p>
                  <p className='paraph'> {robot.email} </p>
                  <p className='paraph'> {robot.phone} </p>
                  <p className='paraph'> {robot.address.city} </p>
                </div>
            
            </div>: <Loader/>
                }
        </div>
        ) 
           
           
    
    
      

}

export default  DetailRobot;





