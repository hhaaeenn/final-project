import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsDetail from "./components/NewsDetail";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Tentang from "./pages/Tentang";


function App()  {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto mt-10">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
        
          <Route path="/newsdetail/:id" element={<NewsDetail />} />
          
        </Routes>
      </div>
    </BrowserRouter>



    

  


    </>
  );
};

export default App;
