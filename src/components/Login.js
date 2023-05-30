import React from "react";
import { Link } from 'react-router-dom'

import './styles/Login.scss'
import { FacebookRounded, Apple, Google } from '@mui/icons-material'

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
                        <h1 className='logoColor'>G</h1> <h1>hoof’</h1> <h1 className='logoColor'>t</h1> <h1>ravels</h1>
                    </Link>
                </div>
                <h2>Log in or create an account</h2>
                <p>Your email address</p>
                <input></input>
                <button className="btn-login">NEXT</button>
                <h3>or</h3>
                <div className="buttons">

                    <button><Google />Continue with google </button>
                    <button><Apple />Continue with Apple </button>
                    <button><FacebookRounded /> Continue with Facebook </button>
                </div>
                {/* <p>By creating an account, you agree to our Privacy policy and Terms of use.</p> */}
            </div>
        </div>
    )
}
export default Login