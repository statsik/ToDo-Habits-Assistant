import { useSelector } from 'react-redux'
import './UserMenu.css'
import { selectUser } from '../../redux/auth/selectors'

const UserMenu = () => {
    const name = useSelector(selectUser)
    return (
        <div className="user-menu-container">
            <p>Hello, {name.name}</p>
            
            <NavLink path="/tasks" className="task-page-nav">Tasks</NavLink>
            <NavLink path="/habits" className="habit-page-nav">Habits</NavLink>
            <NavLink path="/motivation" className="habit-page-nav">Motivation</NavLink>
        </div>
    )
}

export default UserMenu;