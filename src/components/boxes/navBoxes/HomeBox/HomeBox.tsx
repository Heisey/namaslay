import React from 'react';
import './HomeBox.scss';

interface HomeBoxProps {
  navState: boolean
}

const HomeBox: React.FC <HomeBoxProps> = props => {
  const { navState } = props
  return (
    <div className="HomeBox">
      Home Box
    </div>
  )
}

export default HomeBox
