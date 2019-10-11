// import './datetype'
// import './enum'
// import './interface'
// import './class'
// import './generics'

// let hello : string = 'Hello TypeScript'
// document.querySelectorAll('.app')[0].innerHTML = hello;

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/demo/Hello';

ReactDOM.render(
    <Hello name="TypeScript!"></Hello>,
    document.querySelectorAll('.app')[0]
)