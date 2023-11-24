import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import client from '../shared/http-client/Client';

const Login = (props) => {

    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = async (e) => {
        e.preventDefault();

        let body  = {
            email: email,
            password: password
        }

        try{
            const response = await client.post("/api/auth/login", body, {responseType: 'json'})
            const dataToken = response.data.token;
            sessionStorage.setItem("token", dataToken)
            console.log("session token: " , sessionStorage.getItem("token"));
            nav("/home", {replace: true})
        } catch(e) {
            alert("Incorrect login username or password")
        }
    }

        const handleusername = event =>{
            setEmail(event.target.value)
          }
    
          const handlePassword = event =>{
            setPassword(event.target.value)
          }

        return(
            <>
                <div className="center">
                    <h1>Login</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="text-field">
                            <input type="text" name='uname' onChange={handleusername} required/>
                            <span></span>
                            <label>Username</label>
                        </div>
                        <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}></span>
                        <div className="text-field">
                            <input type="password" name='pwd' onChange={handlePassword}  required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <span style={{ color: 'red', position: 'absolute', marginTop: '-35px', paddingBottom: '50px' }}></span>
                        <div className="pass">Forgot Password?</div>
                        <button type="submit" className='btn-login'>Login</button>
                        <div className="signup-link">
                            Not a member? <a href='#' style={{ textDecoration: 'none' }}>Signup</a>
                        </div>
                    </form>
                </div>
            </>
        )
    
}

export default Login;


    // const LoginFormik = useFormik({
    //     initialValues: {
    //         email : "",
    //         password : ""
    //     },
    //     validationSchema: Yup.object({
    //         username: Yup.string().required("*Tidak Boleh Kosong!")
    //         .matches("^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$", "*Invalid email format"),
    //         password: Yup.string().required("*6 min length character")
    //     }),
    //     onSubmit: async () => {
    //         const response = await axios.post()
    //     }
    // })