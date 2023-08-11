import React from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';

const QuoteBox = ({ quote, onNewQuote }) => {
  return (
    <div id="quote-box">
      <QuoteText text={quote.text} />
      <QuoteAuthor author={quote.author} />
      <div>
        <NewQuoteButton onClick={onNewQuote} />
        <TweetQuoteButton text={quote.text} author={quote.author} />
      </div>
    </div>
  );
};

export default QuoteBox;
