import React from "react";
import { NavLink } from "react-router-dom";


const Header=()=>{
    return (
        <>
            <div className="lg:w-max">
                <NavLink to="/H">
                    Home
                </NavLink>
                <NavLink to="/aboutus">
                    About Us
                </NavLink>
                <NavLink to="/contactus">
                    Contact Us
                </NavLink>
            </div>
        
        </>
    )
}
export default Header;