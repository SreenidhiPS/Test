import React from "react";

export default function Navbar(){
    return(
        <>
        <div className='category'>
        <div className='chead d_flex'>
          <h1>Set-Up </h1>
        </div>
       <div className="navHead">
       <div className='box f_flex'>
            <span>Basic Settings <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>User Management <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Transport Settings <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Exam Settings <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Accademic Settings <i className="fa fa-angle-right"></i></span>
        </div>
       </div>
       <br/>
       <div className='chead d_flex'>
          <h1>Data Entry </h1>
        </div>
        <div className="navHead">
       <div className='box f_flex'>
            <span>Leave Approval <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Teacher Substitute <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Attendence <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Class Out <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Staff Attendence <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Teacher Note <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Circular <i className="fa fa-angle-right"></i></span>
        </div>
        <div className='box f_flex'>
            <span>Recognition <i className="fa fa-angle-right"></i></span>
        </div>
        </div>
      </div>
        </>
    );
}