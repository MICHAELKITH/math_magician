import React from 'react';
import PropTypes from 'prop-types';

const BValue = ({ result }) => <p id="bottom-value">{result}</p>;

BValue.propTypes = { result: PropTypes.string.isRequired };

export default BValue;
