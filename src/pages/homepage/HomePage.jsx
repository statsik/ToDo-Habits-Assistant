import AuthNav from '../../components/authnav/AuthNav';
import css from './HomePage.module.css'
import '../../components/Container/Container'


const HomePage = () => {
    return (
        <Container>
            <h2 className={css["task-manager"]}>Organise your day effortesly</h2>
            <span className="img-task-manager" role="img" aria-label="Greeting icon">
                💁
            </span>
            <p>Simple and intuitive task management for everyday productivity.</p>
            <p>Get started for free — create your first task in seconds.</p>
            <AuthNav />
        </Container>
    )
}

export default HomePage;