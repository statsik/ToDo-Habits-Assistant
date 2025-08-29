import css from './AppBar.module.css'
import UserMenu from '../Usermenu/UserMenu.jsx';
import AuthNav from '../Authnav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { NavLink } from 'react-router-dom';


const AppBar = () => {     
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className={css["appbar-container"]}>   
            <NavLink to="/" className={css["home-nav-button"]}>Home</NavLink>  
            {isLoggedIn ? <UserMenu /> : <AuthNav />}  
        </div>
    )
}

export default AppBar;