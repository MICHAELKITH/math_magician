import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiKey from './apiKey';
import Loader from './loader';
import './style/Api.css';

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=humor', {
          headers: {
            'x-api-key': apiKey,
          },
        });
        setQuoteData({ data: response.data[0], isLoading: false, hasError: false });
      } catch (error) {
        setQuoteData({ data: null, isLoading: false, hasError: true });
      }
    };
    fetchData();
  }, []);

  if (quoteData.hasError) {
    return <p className="error">No quotes found!</p>;
  }

  if (quoteData.isLoading) {
    return <Loader />;
  }

  const { quote, author } = quoteData.data;

  return (
    <div className="quotes-data">
      <p>
        <strong>{quote}</strong>
      </p>
      <span>
        by
        {author}
      </span>
    </div>
  );
};

export default Quotes;
