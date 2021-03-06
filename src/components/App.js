import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';
import Counter from './Counter';

const App = ({ name }) => {
  return (
    <div>
    <h1>Hello, {name}!</h1>
    <Counter />
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
