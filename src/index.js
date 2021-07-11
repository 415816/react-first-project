import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let arrPosts = [
  { likes: 5, textPost: 'Hi, how are you?' },
  { likes: 3, textPost: 'It is my first post!' },
  { likes: 18, textPost: 'It is my zero post!' },
];

let collectPeople = [
  { id: 1, name: 'Bulochka' },
  { id: 2, name: 'Nastya' },
  { id: 3, name: 'Tony' },
  { id: 4, name: 'Mashka-Kakashka' }
]

let collectMessages = [
  { id: 1, messag: "Hi!" },
  { id: 2, messag: "How are you?" },
  { id: 3, messag: "Are you sleep?" },
  { id: 4, messag: "I am kakashka!" }
]

ReactDOM.render(
  <React.StrictMode>
    <App arrPosts={arrPosts} collectPeople={collectPeople} collectMessages={collectMessages}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
