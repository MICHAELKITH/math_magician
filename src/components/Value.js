import React from 'react';
import PropTypes from 'prop-types';

const Value = ({ result }) => <p id="bottom-value">{result}</p>;

Value.propTypes = { result: PropTypes.string.isRequired };

export default Value;
