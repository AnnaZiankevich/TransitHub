import React from "react"
import StartPage from '../../views/start-page/StartPage.jsx'
import AboutUs from '../../views/about-us/AboutUs.jsx'
import Car from '../../views/car/Car.jsx'
import FreightCar from '../../views/freight-car/FreightCar.jsx'
import Career from '../../views/career/Career.jsx'
import Contacts from '../../views/contacts/Contacs.jsx'
import NotFound from '../../views/404/404.jsx'
import { Route, Routes } from "react-router-dom";

function MainComponent() {
    return ( 
        <div className="page-content">
            <Routes>
                <Route exact path="/home" element={<StartPage />} /> 
                <Route exact path="/about-us" element={<AboutUs />}/>
                <Route exact path="/car" element={<Car />}/>
                <Route exact path="/freight-car" element={<FreightCar />} /> 
                <Route exact path="/career" element={<Career />}/>
                <Route exact path="/contacts" element={<Contacts />}/>
                <Route exact path="/*" element={<NotFound />} /> 
            </Routes>
        </div>
     );
}

export default MainComponent;