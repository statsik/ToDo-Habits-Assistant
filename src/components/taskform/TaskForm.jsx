import { useDispatch } from "react-redux";
import './TaskForm.css'
import { addTask } from "../../redux/tasks/operations";
import * as Yup from 'yup';


const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const newTask = {
            task: values.task,
            dateOfTerminate: values.dateOfTerminate,
        };
        dispatch(addTask(newTask));
    };

    const validationSchema = Yup.object({
        task: Yup.string().required().min(1).max(100),
        dateOfTerminate: Yup.date(),
    })
    return (<>
        <Formik initialValues={{ task: '', dateOfTerminate: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="form-task">
                <p className="form-task-enter-your-task">Enter your task</p>
                <Field name="task"></Field>
                <p className="form-task-enter-date-publication">Enter the date of publication</p>
                <Field name="dateOfTerminate"></Field>
            </Form>
        </Formik>
    </>)
}

export default TaskForm;