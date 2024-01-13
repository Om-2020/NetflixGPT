import React, { useState } from "react";
import { Header } from "./Header";
import { netflix_background_url } from "../utilis/constant";
import { checkvalidData } from "../utilis/validate";
import { useRef } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";


import { auth } from "../utilis/firebase";

export const Login = () => {

    const [islogin, setlogin] = useState(false);
    const [ErrorMsg,setErrorMsg] = useState(null);
    const email = useRef();
    const password = useRef();

    const handleButtonClick = ()=>{
        // validate form data
        const message = checkvalidData(email.current.value,password.current.value);
        setErrorMsg(message);

        if(message) return;

        if(!islogin)
        {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });


        }
        else{

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }




    }
    const istogle = () => {
        setlogin(!islogin);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={netflix_background_url} alt="netflix_background_img"></img>
            </div>
            <div>
                <form 
                onSubmit={(e)=>e.preventDefault()}
                className="w-4/12  bg-black absolute p-12  mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-2xl py-4">{islogin ? "Sign in" : "Sign Up"}</h1>
                    {
                        islogin === false ? <input type="text"
                            placeholder="Name"
                            className="p-4 my-5 w-full bg-gray-700 "

                        >
                        </input> : ""
                    }
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email"
                        className="p-4 mt-1 w-full bg-gray-700 "
                    ></input>
                    <input
                        ref={password}
                        type="text"
                        placeholder="Password"
                        className="p-4 my-5 w-full bg-gray-700"
                    ></input>
                    <p className="text-red-500 font-bold text-lg py-2">{ErrorMsg}</p>
                    <button className="p-4 my-5 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{islogin ? "Sign in" : "Sign Up"}</button>
                    <p className="p-4 py-3 cursor-pointer" onClick={istogle}>{islogin === false ? "Already registered? Sign In Now" :"New to Netflix? Sign Up Now"}</p>
                </form>
            </div>
        </div>
    );
};
