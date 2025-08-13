import '../../components/Container/Container'
import css from './HabitPage.module.css'
import HabitList from '../../components/habitlist/HabitList'

const HabitPage = () => {
    return (
        <Container>
            <title className={css["p"]}>
                Your habits:
                <HabitList />
            </title>
        </Container>
            
    )
}

export default HabitPage;