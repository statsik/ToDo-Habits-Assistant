import './AppBar.css'
import Navigation from '../navigation/Navigation.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from '../authnav/AuthNav.jsx';
import { useSelector } from 'react-redux';


const AppBar = () => {
    const isLoggedIn = useSelector()
    return (
        <>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </>
    )
}

export default AppBar;