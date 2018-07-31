import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello, Vitalii';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('root')
);

module.hot.accept();
