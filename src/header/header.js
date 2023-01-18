import React from "react";
import './header.css';

const Header = () => {
    const logo = 'https://play-lh.googleusercontent.com/HggFTv-kCClpkL7S87PMCVR6PTurz5skW7VhASP5u2NjRF_a_Yg_Fs8SoE_2JaLDE2w=w240-h480-rw';
    const profile = 'https://w7.pngwing.com/pngs/89/405/png-transparent-computer-icons-user-organization-user-svg-black-avatar-user.png';

    return(
        <>
        <header className="main-header container-head">
            <div className="row d_flex">
                <div className="col-lg-3 col-md-3 col-sm-3 left header">
                   <img src={logo} alt="logo" />
                   <label className="logoHead">TrackMySchool</label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 center header">
                   <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <i className="fa fa-bars icons"></i>
                    <i className="fa fa-home icons"></i>
                    <i className="fa fa-arrows-alt icons"></i>
                    <i className="fa fa-book icons book"></i>
                    <label className="headerTitle">TrackMySchool - Staging</label>
                    </div>
                    <div className="col-lg-6 col-md-6 selects">
                        <div className="custom-selects">
                            <label className="box-text1">Academic Year</label>
                            <select>
                                <option value='2023-2024' style={{display: "none"}}>2023-2024</option>
                            </select>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 right header">
                    <label className="profile-name">Mi-TLAN Admin</label>
                    <img src={profile} alt='profile' className="profile-img"/>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;