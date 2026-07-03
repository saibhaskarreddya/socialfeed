import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formdata, setFormdata] = useState({
        fullname: "",
        username: "",
        password: "",
        email:""
    })

    const handleRegister=async()=>{
        try{
            const response=await fetch("https://socialfeed-api-kmva.onrender.com/api/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formdata),
            })
            const data=await response.json();

            if(data.success){
                alert("Regsisterd Successfully");
                setFormdata({
                    fullname:"",
                    username:"",
                    email:"",
                    password:""
                });
                setIsLogin(true)
            }
            else{
                alert(data.message);
            }
        } catch(error){
            console.error(error);
            alert("server error");
        }
    }

    const handleLogin=async()=>{
        try{
            const response=await fetch("https://socialfeed-api-kmva.onrender.com/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    username:formdata.username,
                    password:formdata.password,
                }),
            });
            const data=await response.json();
            if(data.success){
                localStorage.setItem("user",JSON.stringify(data.user));
                alert("Login successfull");
                navigate("/home");
            }
            else{
                alert(data.message);
            }
        }catch (error){
            console.log(error);
            alert("Server Error");
        }
    }

    const handleChange = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })
    }
    return (
        <div className="login">
            <div className="loginContainer">

                <div className="logo">
                    ⚡
                </div>

                <h1>Pulse</h1>

                <p className="subtitle">
                    The real-time feed for what matters now.
                </p>

                <div className="card">


                    <div className="tabs">
                        <button
                            className={isLogin ? "active" : ""}
                            onClick={() => setIsLogin(true)}
                        >
                            Sign In
                        </button>

                        <button
                            className={!isLogin ? "active" : ""}
                            onClick={() => setIsLogin(false)}
                        >
                            Create Account
                        </button>
                    </div>


                    {!isLogin && (
                        <div className="inputGroup">
                            <label>Fullname</label>
                            <input
                                type="text"
                                placeholder="yourhandle"
                                name="fullname"
                                value={formdata.fullname}
                                onChange={handleChange}
                            />
                             <label>Email</label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange}
                        />
                        </div>
                        
                        
                    )}
                    <div className="inputGroup">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="yourhandle"
                            name="username"
                            value={formdata.username}
                            onChange={handleChange}
                        />
                    </div>

                    

                    <div className="inputGroup">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            name="password"
                            value={formdata.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="loginBtn" onClick={isLogin?handleLogin:handleRegister}>
                       {isLogin?"Signin":"Create Account"}
                    </button>

                </div>
                
                <p className="footerText">
                    New to Pulse? <span>Create an account</span>
                </p>

            </div>
        </div>
    );
};

export default Login;