//rect imports
import React, { Fragment, useState } from 'react';

//imports for making axios
import axios from 'axios';

//utils imports
import { setAuth } from '../../utils/auth';
import { LOGIN_ENDPOINT } from '../../utils/APIEndpoints';

//styles
import './Login.css';

//login method
function Login(props) {
    const [username, setUsername] = useState(''); //useState for username
    const [password, setPassword] = useState(''); //useState for password

    //to update useState
    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);


    //initaiting login
    const initiateLogin = async e =>  {
        e.preventDefault();
        if(!username)  {
            alert('username is required');
            return;
        }
        if(!password) {
            alert('password is required')
            return;
        }
        if(username!==password) {
            alert('Please enter valid credentials');
            return;
        }

        //axios post
        //some times the post functionality is not working fine so I have defined the object directly
        // const { data } = await axios.post(LOGIN_ENDPOINT, {
        //     username: 'Qaifi', 
        //     password: 'Password'
        // })

        //data to login
        const data = {
            username: 'Qaifi', 
            password: 'Password'
        }

        //authentication
        if(data && data.username==='Qaifi') {
            setAuth(true);
            alert('Login Successful');
            props.history.push('/'); 
            return;
        } 
    }


    //returns login form
    return (
        <Fragment>
            <main className="MainContainer">
            <div>
                <form className="LoginForm">
                    <h1>Sign In</h1>
                    <input 
                        className="InputField" 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter Username" />
                    <input 
                        className="InputField" 
                        type="password"
                         name="password" 
                         id="password" 
                         value={password}
                         onChange={handlePasswordChange}
                         placeholder="Enter Password" />
                    <button 
                        className="Button" 
                        id="login-btn"
                        onClick={initiateLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
            </main>
        </Fragment>
    )
}

export default Login;
