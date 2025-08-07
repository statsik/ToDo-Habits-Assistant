import RegistrationForm from '../../components/registrationform/RegistrationForm.jsx';
import css from './RegistrationPage.module.css'
import '../../components/Container/Container'


const RegistrationPage = () => {
    return (
        <Container>
            <title className={css["p"]}>Registration</title>
            <RegistrationForm></RegistrationForm>
        </Container>
    )
}

export default RegistrationPage;