import Container from '../Container/Container';
import css from './Header.module.css'
import AppBar from '../appbar/AppBar.jsx';


const Header = () => {     
    return (    
        <div className={css["header-container"]}>   
            <Container>
                <AppBar/>
            </Container>
        </div>
    )
}

export default Header;                                                                      