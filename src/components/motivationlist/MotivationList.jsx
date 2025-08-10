import css from './MotivationList.module.css'

const MotivationList = () => {
    return (
        <div className={ css["motivation-list-container"]}>
            <p className={css["p"]}>Motivation for today</p>
        </div>
    )
}

export default MotivationList;