import css from './MotivationList.module.css'
import { useState, useEffect } from 'react';

const MotivationList = () => {
    
      const [quote, setQuote] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchQuote = async () => {
        try {
            const response = await fetch('https://zenquotes.io/api/today');
            if (!response.ok) {
            throw new Error('Error');
            }
            const data = await response.json();
            setQuote(data[0]);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchQuote();
    }, []);

    if (error) {
        return <div>Error of loading: {error}</div>;
    }

    if (!quote) {
        return <div>Loading...</div>;
    }
    return (
        <div className={ css["motivation-list-container"]}>
            <p className={css["p"]}>Motivation for today</p>
        </div>
    )
}

export default MotivationList;