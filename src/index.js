/*
Bridge file bw app.js and index.html
by using ReactDOM,VDOM convert DOM
 */
import ReactDOM from 'react-dom';
import App from './App'
const div=document.querySelector('#root');
const root=ReactDOM.createRoot(div);
root.render(<App/>);

