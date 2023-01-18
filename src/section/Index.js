import React from "react";
import Navbar from "./Navbar";
import './navbar.css';
import MainSection from "./mainSection";
import './mainSection.css';


export default function Section(){
    return(
        <div className="containers">
            <div className="row">
                <div className="col-lg-4">
                    <Navbar />
                </div>
                <div className="col-lg-8 main-section">
                    <MainSection />
                </div>
            </div>
        </div>
    );
}