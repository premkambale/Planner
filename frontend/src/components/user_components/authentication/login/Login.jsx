import { urls } from "../../../../constants/api/ApiUrlConstants";
import { LOGIN_POST } from "../../../common/httpmethods/HttpMethods";
import { useState } from "react";
import {useNavigate } from 'react-router-dom'

import "../login/login.css";

const Login = () => {

    const [ userData , setUserData ] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const handleFormData = ( e , field ) => {

        if(field == "email"){
            setUserData({
                ...userData , 
                email: e.target.value
            })
        }else if(field == "password"){
            setUserData({
                ...userData ,
                password:e.target.value 
            })
        }

    }

    const handleLogin = async() => {
        try{
            const bodyToSend = {
                email : userData?.email,
                password : userData?.password
            }

            const userAuth = await LOGIN_POST(urls?.login , bodyToSend)    

            if(userAuth?.success){
                navigate("/main")
                sessionStorage.setItem("appToken", userAuth?.token);
                sessionStorage.setItem('userRole',userAuth?.role)
            }else{
                console.log("error while Login")
            }

        }catch(err){
            console.log(err)
        }
    }





  return (
    <section className="login-wrapper">
      <div className="leftside"></div>
      <div className="rightside">
        <div className="login-container">
          <div className="login-content">
            <div className="login-content_header">
              <span className="logo">
                Perfect Planner
              </span>
              <h2>Welcome Back</h2>
            </div>
            <div>
              <div className="login-form">
                <div className="inputwrapper">
                    <input type="text" placeholder="email" onChange={(e) => handleFormData(e, "email")}/>
                </div>
                <div  className="inputwrapper">
                    <input type="password" placeholder="Password" onChange={(e) => handleFormData(e, "password")} />
                </div>
                <div  className="inputwrapper">
                    <button type="button" className="loginuser" onClick={handleLogin}>Submit </button>
                </div>
              </div>
              <div className="login-netoworks">
                <p>
                  Dont have an account? <span>Register</span>
                </p>
              </div>
            </div>
          </div>
          <div className="login-footer"></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
