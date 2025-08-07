import { useSelector } from 'react-redux'
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors'

const UserMenu = () => {
    const name = useSelector(selectUser)
    return (
        <div className={css["user-menu-container"]}>
            <p>Hello, {name.name}</p>
            
            <NavLink path="/tasks" className="task-page-nav">Tasks</NavLink>
            <NavLink path="/habits" className="habit-page-nav">Habits</NavLink>
            <NavLink path="/motivation" className="habit-page-nav">Motivation</NavLink>
        </div>
    )
}

export default UserMenu;