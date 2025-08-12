import TaskForm from '../../components/taskform/TaskForm'
//import css from './TaskPage.module.css'
import '../../components/Container/Container'



const TaskPage = () => {
    return (
        <Container>
            <TaskList />
            <TaskForm />
        </Container>
    )
}

export default TaskPage