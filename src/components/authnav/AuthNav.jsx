import { NavLink } from 'react-router-dom';
import css from'./AuthNav.module.css'

const AuthNav = () => {
    return (
        <div className={css['authnav-container']}>
            <NavLink className={css["login-nav"]} to="/login">Log In</NavLink>
            <NavLink className={css["register-nav"]} to="/register">Register</NavLink>
        </div>  
    )  
}  

export default AuthNav;  