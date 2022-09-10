import React from "react";
import Title from "./Title";
/* import {Routes, Route} from 'react-router-dom'; */
import CardList from "./CardList";
/* import DetailRobot from './DetailRobot'; */


 function App() {
  
  return (
    <main>
     <Title/>
      <CardList/>

{/*       <Routes>
        <Route path='/' element= {<App/>} />
        <Route path='robot/:id' element= {<DetailRobot/>} />
       
      </Routes>   */}

  </main>
  );
} 

export default App; 
