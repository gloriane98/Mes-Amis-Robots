import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './components/App';
/* import Home from "../src/components/Home" */
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import DetailRobot from '../src/components/DetailRobot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App/>} />
       <Route path='robot/:id' element= {<DetailRobot/>} /> 
       
      </Routes>  
    </BrowserRouter> 
    {/*   <App />  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
