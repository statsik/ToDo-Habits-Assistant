import { NavLink } from 'react-router-dom';
import './AuthNav.module.css'

const AuthNav = () => {
    return (
        <>
            <div className='authnav-container'>
                <NavLink className="login-nav" to="/login">Log In</NavLink>
                <NavLink className="register-nav" to="/register">Register</NavLink>
            </div>  
        </>   
    )  
}  

export default AuthNav;  