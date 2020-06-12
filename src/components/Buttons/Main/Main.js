import React from 'react';

import './Main.scss'

const MainButton = (props) => {
  return <button className="btn-main">{props.message}</button>;
};

export default MainButton;
