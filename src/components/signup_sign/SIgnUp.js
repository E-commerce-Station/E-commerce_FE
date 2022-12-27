import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./signup.css";

const SIgnUp = () => {
    
    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })
    
    console.log(udata)

    const adddata = (e)=>{
        const {name,value} = e.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }


    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./cnttc_logo.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text"
                            onChange={adddata}
                            value={udata.fname}
                            name="fname" id="fname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email"
                            onChange={adddata}
                            value={udata.email}
                            name="email" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile number</label>
                            <input type="text"
                            onChange={adddata}
                            value={udata.mobile}
                            name="mobile" id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                            onChange={adddata}
                            value={udata.password}
                            name="password"
                            id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password again</label>
                            <input type="password"
                            onChange={adddata}
                            value={udata.cpassword}
                            name="cpassword"
                            id="cpassword" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>
                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SIgnUp