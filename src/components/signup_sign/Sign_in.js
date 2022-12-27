import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./signup.css"


const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    // console.log(logdata);
    const adddata = (e) => {
        const { name, value } = e.target;

        setData(()=>{
            return {
                ...logdata,
                [name]:value
            }
        })
    }

// const signIn = () => {
//     const [logdata, setData] = useState({
//         email: "",
//         password: ""
//     });
//     fetch("https://localhost:44354/api/app/customer/check-login?userName=" + logdata.email + "&password=" + logdata.password)
//     .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
// }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./cnttc_logo.png" alt="cnttclogo" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={ logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password }
                                id="password" placeholder="At least 6 char" />
                        </div>
                        <button type="submit" className="signin_btn" onclick="signIn()">Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to zone?</p>
                    <NavLink to="/register"><button>Create your CNTTC Account</button></NavLink>
                </div>
            </div>

        </section>
    )
}

export default Sign_in