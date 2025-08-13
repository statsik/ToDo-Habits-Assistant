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
            setQuote(data[Math.floor(Math.random() * data.length)]);
        } catch (err) {
            setError(err.message);
        }
        };

        fetchQuote();
        const interval = setInterval(fetchQuote, 24 * 60 * 60 * 1000);
        return () => clearInterval(interval); 
    }, []);

    if (error) {
        return <div>Error of loading: {error}</div>;
    }

    if (!quote) {
        return <div>Loading...</div>;
    }
    return (
        <div className={ css["motivation-list-container"]}>
            <p className={css["motivation-list-quote"]}>{quote.text}</p> 
            <p className={css["motivation-list-quote-author"]}>{quote.author}</p>
        </div>
    )
}

export default MotivationList;