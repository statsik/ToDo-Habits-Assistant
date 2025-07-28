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
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="form-contact">

            </Form>
        </Formik>
    </>)
}

export default TaskForm;