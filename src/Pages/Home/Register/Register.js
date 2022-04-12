import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
                <h1 className='form-title'>Register</h1>
                <div>
                    <form>
                        <div className='input-field'>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="1" />
                        </div>
                        <div>
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" id="2" />
                        </div>
                        <div>
                            <label htmlFor="PasswordConfirm">Confirm Password</label>
                            <input type="PasswordConfirm" name="PasswordConfirm" id="3" />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                    <div>
                        <p>Don't have any account?<Link to="/Register">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;