import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./component/Card";
import Header from "./component/Header";
import InnerPageContent from "./component/InnerPageContent";
import Loading from "./component/Loading";
import Footer from "./component/Footer";

function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>setLoading(true),[])
  return (
    <>
    
     <Routes>
        <Route
          path="/"
          element={
            <>
            {!loading? <Loading /> : null}
            {loading ?(
              <div>
              <Header />
              <Card />
              <Footer />
            </div>
            ) :null
            }
            
            </>
          }
        />
        <Route exact path="/:id/route" element={<InnerPageContent />} />
      </Routes> 
    </>
  );
}

export default App;
