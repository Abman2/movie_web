import "./App.css";
import React, {useEffect, useState } from "react";
import { Routes,Route} from "react-router-dom";
import Card from "./component/Card";
import Header from "./component/Header";
import InnerPageContent from "./component/InnerPageContent";
import Inner from "./component/Inner"
function App() {
  
  

  return (
    <>
      
<Inner />
   
    
      {/* <Routes>
      <Route path="/" element = {<div><Header/><Card/></div>} />
      <Route exact path="/:id route" element={<InnerPageContent/>}/> 
      </Routes> */}
     
  
      
    </>
    
  );
}

export default App;
