import AuthNav from '../authnav/AuthNav';
import Container from '../Container/Container';
import css from './Header.module.css'

const Header = () => {
    return (<div className={css["header-container"]}>
        <Container>
            <h2>To Do List App</h2>
            <p>About us</p>
            <AuthNav />
        </Container>
    </div>)
}

export default Header;