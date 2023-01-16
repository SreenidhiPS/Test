import React from "react";
import Navbar from './navbar';
import SectionMain from "./mainSection";

export default function MainSection(){
    return(
        <>
         <section className='container-fluid'>
            <div className='row'>
                <div className="containerNav col-sm-3 col-md-6 col-lg-4">
                    <Navbar />
                </div>
                <div className='flexboxItem col-sm-9 col-md-6 col-lg-8'>
                    <SectionMain />
                </div>
            </div>
         </section>
        </>
    );
}