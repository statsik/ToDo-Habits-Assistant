import LoginForm from '../../components/loginform/LoginForm.jsx';
import css from './LoginPage.module.css'
import '../../components/Container/Container'


const LoginPage = () => {
    return (
        <Container>
            <title className={css["p"]}>Registration</title>
            <LoginForm></LoginForm>
        </Container>
    )
}

export default LoginPage;