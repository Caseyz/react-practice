// import React from 'react';
// import ReactDOM from 'react-dom';

import React from './react-function/index'
let ReactDOM = React

// let element = <div>很高兴遇见你</div>

let element = <div>
  <div title="很高心认识你">很高兴遇见你</div>
  <p>nice to meet you</p>
  <a href="https://www.baidu.com">去百度</a>
</div>

ReactDOM.render(
  element,
  document.getElementById('root')
);
