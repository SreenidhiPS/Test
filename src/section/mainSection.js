import React, { useState, useReducer } from "react";
import ReactQuill from "react-quill";
import '../editor/editor.css';

export default function MainSection(){
    const [data, setData] = useState('');
    const [state, dispatch] = useReducer(reducer,{});

    const updateData = e => {
        dispatch({type: 'submitted', payload: {
            ...state,
            [e.target.name]: e.target.value
        }})
    }

    function reducer(state, action){
        switch(action.type){
            case 'submitted':
                return action.payload
            default:
                return state;
        }
    }

    function SubmitHandler(e){
        e.preventDefault()
        if(!state.class || !state.subject){
            alert("Don't Skip Required Details");
        }
        else{
            console.log(state, data);
        }
    }

    function Cancel(){
        alert('Changes Reverted');
    }

    return(
        <>
        <div className="container">
            <h2 className="section-header">Question Paper Creation</h2>
            <br/>
            <form className="form-section" onSubmit={SubmitHandler}>
                <div className="main-section-header">
                        <h4>Class & Exam Details</h4>
                </div>
                <div className="form-body">
                    <div className="row">
                        <div className="col-lg-6 form-head">Class Details</div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-3 form-head">Exam Details</div>
                    </div><br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="form-label">Class <i className="star">*</i></label><br/>
                            <select name="class" onChange={updateData}>
                                <option value="none" style={{display: "none"}}>--Select--</option>
                                <option value="1" style={{backgroundColor:'#fff'}}>1</option>
                                <option value="2" style={{backgroundColor:'#fff'}}>2</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                        <label className="form-label">Division</label><br/>
                            <select name="division" onChange={updateData}>
                                <option value="none" style={{display: "none"}}>--All--</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Exam Title</label><br/>
                            <input type='text' name="exam" onChange={updateData}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="form-label">Subject <i className="star">*</i></label><br/>
                            <select className="select-input" name="subject" onChange={updateData}>
                                <option value="none" style={{display: "none"}}>--Select--</option>
                                <option value="Science" style={{backgroundColor:'#fff'}}>Science</option>
                                <option value="Maths" style={{backgroundColor:'#fff'}}>Maths</option>
                            </select>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label className="form-label">Time</label><br/>
                                    <input type="text" className="halfs" name="time" onChange={updateData}/>
                                </div>
                                <div className="col-lg-6">
                                    <label className="form-label">Max. Marks</label><br/>
                                    <input type="text"  className="half" name="marks" onChange={updateData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label className="form-label">No. Of Sets</label><br/>
                                    <input type="text" className="text-input" name="sets" onChange={updateData}/>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-7">
                                    <label className="form-label">Question Paper Type</label><br/>
                                    <select name="paperType" className="selectors" onChange={updateData} style={{backgroundColor:'#fff', textAlign:'center'}}>
                                        <option value="none" style={{display: "none"}}>--Select--</option>
                                        <option value="Shuffled Questions" style={{backgroundColor:'#fff'}}>Shuffled Questions</option>
                                        <option value="Different Questions" style={{backgroundColor:'#fff'}}>Different Questions</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col-lg-6 form-head">
                        <div>General Instructions</div>
                        <ReactQuill
                            theme="snow"
                            className="quill"
                            name="message"
                            value={data}
                            placeholder="Enter Message..."
                            onChange={e => setData(e)}
                        ></ReactQuill>
                    </div>
                    </div>
                    <br/>
                    <div className="buttons">
                        <button className="save" type="submit">Save and Next</button> &nbsp;&nbsp;
                        <button className="cancel" onClick={Cancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}