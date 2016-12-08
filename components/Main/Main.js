import React from 'react';
import './Main.css';

const Main = (props) => {
  return (
    <main className="Main" role="main">
      {props.children}
    </main>
  );
};

export default Main;
