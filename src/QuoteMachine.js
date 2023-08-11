import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

const QuoteMachine = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchRandomQuote = async () => {
    // Implement code to fetch a random quote from an API
    // For example, you can use the "https://api.quotable.io/random" API
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      <QuoteBox quote={quote} onNewQuote={fetchRandomQuote} />
    </div>
  );
};

export default QuoteMachine;