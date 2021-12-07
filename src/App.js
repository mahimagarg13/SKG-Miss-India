import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Registration from "./Pages/Registration";
import Contactus from "./Pages/Contactus";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Sponsers from "./Pages/Sponsers";
import Copyright from "./Components/Copyright";
import Gmap from "./Pages/Contacts/Gmap";
import Privacypolicy from "./Pages/Privacypolicy";
import Termsconditions from "./Pages/Termsconditions";
import Rulesregulation from "./Pages/Rulesregulation";
import Errorpage from "./Pages/Errorpage";
import Payment from "./Pages/Regis/Payment";
import Designer from "./Pages/Designer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          {/* <Route path="/registration" element={<Registration />}></Route> */}
          <Route path="/registration" element={<Registration />}>

            <Route path=":status" element={<Payment />}></Route>

          </Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/sponsers" element={<Sponsers />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/gmap" element={<Gmap />}></Route>
          <Route path="/privacypolicy" element={<Privacypolicy />}></Route>
          <Route path="/termsconditions" element={<Termsconditions />}></Route>
          <Route path="/rulesregulation" element={<Rulesregulation />}></Route>
          <Route path="/errorpage" element={<Errorpage />}></Route>
          <Route path="/designer" element={<Designer />}></Route>
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;