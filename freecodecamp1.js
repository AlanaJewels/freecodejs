// App.js
import React, { useState, useEffect } from "react";
import './freecodecamp1.css';

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Fetch a random quote
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote({ text: data.content, author: data.author });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default App;
