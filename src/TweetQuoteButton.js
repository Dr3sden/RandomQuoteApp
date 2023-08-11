import React from 'react';

const TweetQuoteButton = ({ text, author }) => {
  const tweetText = encodeURIComponent(`"${text}" - ${author}`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <a
      id="tweet-quote"
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet Quote
    </a>
  );
};

export default TweetQuoteButton;
