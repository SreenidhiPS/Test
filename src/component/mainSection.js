import React, { useState } from "react";
import './index.css';

export default function SectionMain() {
    const [classes, setClasses] = useState('');
    const [divisions, setDivisions] = useState('');
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');

    console.log(classes, divisions, title, subject);

    return(<>
    <div className="container">
        <h1>Question Paper Creation</h1>
   <section className="mainBox">
   <div className="head">
    <div className="container d_flex">
        <div className="left row">
            <h3>Class & Exam Details</h3>
        </div>
    </div>   
    </div>
    <div className="formBox">
    <div style={{padding: '10px 10px'}}>
    <h4 style={{float:'left', padding: '10px 10px'}}> Class Details</h4>
   <h4 style={{float:'right', padding: '10px 10px'}}> Exam Details</h4>
    </div>
   <form className="forms">
        <div className="row">
            <div className="col-lg-4">
            <label for="class">Class <i className="star">*</i>  </label> <br/>
<select name="class" id="class" onChange={e => setClasses(e)} required>
    <option value="none">-select-</option>
</select>
            </div>
            <div className="col-lg-4">
                <label for='div'> Division  </label><br/>
                <select name="div" id='div' onChange={e => setDivisions(e)} >
                    <option value='none'>All</option>
                </select>
            </div>
            <div className="col-lg-4">
                <label for='div'> Exam Title </label><br/>
                <input type='text' onChange={e => setTitle(e)} required/>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-lg-4">
                <label> Subject <i className="star">*</i></label><br/>
                <select name='sub' onChange={e => setSubject(e)}>
                    <option value='none'>-Select-</option>
                </select>
            </div>
            <div className="col-lg-4">
            <label>Time</label><br/>
                    <input type='text'/>
            </div>
            <div className="col-lg-4">
                    <label>Max. Mark</label><br/>
                    <input type='text'/>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-lg-4">
                <label>No. Of Sets</label><br/>
                <input type='text'/>
            </div>
            <div className="col-lg-4">
                <label>Question Paper Type</label><br/>
                <select name='type' >
                    <option value='none'>-Select-</option>
                    <option value='Shuffled Questions'>Shuffled Questions</option>
                    <option value='Different Questions'>Different Questions</option>
                </select>
            </div>
        </div>
        <br/>
        <label> General Instructions</label><br/>
        <textarea row='6' cols='80'></textarea>
        <br/>
        <button className="save"> Save and Next </button> &nbsp;
        <button className="cancel"> Cancel</button>
        <br/>
    </form>
    </div>
   </section>
    </div>
    </>);
}