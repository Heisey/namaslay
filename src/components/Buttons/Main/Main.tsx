import React from 'react';

import './Main.scss'

const MainButton: React.FC<{ message: string }> = (props) => {
  return <button className="btn-main">{props.message}</button>;
};

export default MainButton;
