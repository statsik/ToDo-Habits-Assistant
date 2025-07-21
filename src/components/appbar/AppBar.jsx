import './AppBar.css'
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../authnav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className="appbar-container">
            <NavLink to="/" className="Home-nav">Home</NavLink>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
    )
}

export default AppBar;