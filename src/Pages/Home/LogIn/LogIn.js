import React from 'react';
import { Link } from 'react-router-dom';
import "./LogIn.css"

const LogIn = () => {
    return (
        <div className='login'>
            <div>

            </div>
            <div>
                <h1 className='form-title'>Log In</h1>
                <div>
                    <form>
                        <div className='input-field'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="1" />
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="email" id="2" />
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                    <div>
                        <p>Don't have any account?<Link to="/Register">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;