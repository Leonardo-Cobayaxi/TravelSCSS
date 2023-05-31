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
                <Link className="link-login" to='https://matias.ma/nsfw/'>
                    <button className="btn-login">NEXT</button>
                </Link>
                <h3>or</h3>
                <div className="buttons">
                    <Link className="link-social" to='https://matias.ma/nsfw/'>
                        <button><Google />Continue with google </button>
                    </Link>
                    <Link className="link-social" to='https://matias.ma/nsfw/'>
                        <button><Apple />Continue with Apple </button>
                    </Link>
                    <Link className="link-social" to='https://matias.ma/nsfw/'>
                        <button><FacebookRounded /> Continue with Facebook </button>
                    </Link>
                </div>
                <span>Please do not click this links</span>
            </div>
        </div>
    )
}
export default Login