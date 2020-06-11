import React from 'react';
import './StoriesBox.scss';

interface StoriesBoxProps {
  navState: boolean
}
const StoriesBox: React.FC <StoriesBoxProps> = props => {

  const { navState } = props
  
  return (
    <div className={`StoriesBox StoriesBox--${!navState ? 'small': 'large'}`}>
      Stories Box
    </div>
  )
}

export default StoriesBox
