import React from 'react';
import './StoriesBox.scss';

const StoriesBox = props => {

  const { navState } = props

  return (
    <div className={`StoriesBox StoriesBox--${!navState ? 'small' : 'large'}`}>
      Stories Box
    </div>
  )
}

export default StoriesBox
