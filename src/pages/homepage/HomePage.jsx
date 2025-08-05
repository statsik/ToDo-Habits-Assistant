import AuthNav from '../../components/authnav/AuthNav';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <h2 className="task-manager">Organise your day effortesly</h2>
            <span className="img-task-manager" role="img" aria-label="Greeting icon">
                💁
            </span>
            <p>Simple and intuitive task management for everyday productivity.</p>
            <p>Get started for free — create your first task in seconds.</p>
            <AuthNav />
        </>
    )
}

export default HomePage;