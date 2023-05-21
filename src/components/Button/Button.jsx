import React from 'react';
// import PropTypes from 'prop-types';

function Button({ loadMoreHandler }) {
    return (
        <button type='button' className='Button' onClick={loadMoreHandler}>
            Load more
        </button>
  );
}

export default Button;