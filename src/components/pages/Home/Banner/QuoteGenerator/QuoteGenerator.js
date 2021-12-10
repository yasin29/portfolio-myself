import React from 'react';
import { Spinner } from 'react-bootstrap';
import useQuote from '../../../../Hooks/useQuote';

const QuoteGenerator = () => {
    const [quotes] = useQuote();
    const arrLen = quotes.length;
    let min = 0;
    let max = arrLen;
    let qt = quotes[Math.floor(Math.random() * (max - min) + min)];
    return (
        <div>
            {quotes.length ? <blockquote style={{ color: 'white' }} className="blockquote text-center">
                <span>
                    <q style={{ fontFamily: 'Source Code Pro', fontSize: '1.3rem' }}>{qt.quote} </q>
                    <footer className="quote-author blockquote-footer mt-1">
                        <cite style={{ color: 'silver' }} title="Source Title">{qt.author}</cite></footer>
                </span>
            </blockquote> : <Spinner animation="grow" variant="info" />}
        </div>
    );
};

export default QuoteGenerator;