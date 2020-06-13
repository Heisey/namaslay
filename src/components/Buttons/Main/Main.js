import React from 'react';

import './Main.scss'

const MainButton = (props) => {

  const { message, onClick } = props
  return <button className="btn-main"
    onClick={onClick}
  >{message}</button>;
};

export default MainButton;
