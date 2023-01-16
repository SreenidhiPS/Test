import React from "react";
import './header.css';

export default function Head(){
    const logo = "https://play-lh.googleusercontent.com/HggFTv-kCClpkL7S87PMCVR6PTurz5skW7VhASP5u2NjRF_a_Yg_Fs8SoE_2JaLDE2w=w240-h480-rw";
    const profile = "https://www.designbust.com/download/325/png/user_online_icon512.png";
    return(
        <>
        <section className="head">
            <div className="containers d_flexs">
                <div className="left row">
                <img src={logo} alt='icon' className="logoImg" />
                    <label className="logoHead">TrackMySchool</label>
                </div>
                <div className="textCenter row">
                    <i className="fa fa-bars icons"><span></span></i>
                    <i className="fa fa-home icons"><span></span></i>
                    <i className="fa fa-window-maximize icons"><label>TrackMySchool - Staging</label></i>
                    <div className="boxes">
                    <div className="yellow-box"> <h4 className="box-t1">Academic Year</h4> <div className="white-box white"><h4 className="box-t2">2023-2024 <i className="fa fa-angle-down"></i></h4></div></div>
                    </div>
                </div>
                <div className="right rights row ">
                    <h4>Mi-TMS Admin <img src={profile} alt="profile" className="proImg" /></h4>
                </div>
            </div>
        </section>
        </>
    );
}