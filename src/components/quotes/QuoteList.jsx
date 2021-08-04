import React from  'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ quotes }) => (
  <ul>
    {quotes.map((quote) => (
      <li key={quote.id}>
        <Quote {...quote} />
      </li>
    ))}
  </ul>
);

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuoteList;
