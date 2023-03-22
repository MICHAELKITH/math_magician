import React from 'react';
import PropTypes from 'prop-types';

const BottomValue = ({ result }) => <p id="bottom-value">{result}</p>;

BottomValue.propTypes = { result: PropTypes.string.isRequired };

export default BottomValue;
