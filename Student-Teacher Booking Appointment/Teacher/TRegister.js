import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,  useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword1,
    signInWithGoogle,
} from "../Firebase.js";
import "./TRegister.css";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
   // const [type, setType] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate =  useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword1(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) return navigate("/tdashboard");
    }, [user, loading, navigate]);
    return (
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/tlogin">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;