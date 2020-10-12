import React from 'react';
import logo from './logo.svg';
import './App.css';
import { myFirebase } from './firebase';
function App() {
  myFirebase.auth.signInWithEmailAndPassword('giridharangs23@gmail.com', 'giriamugs23').then((d)=>{
    console.log(d)
  });
  console.log(myFirebase)
  return (
    <div className="App">
      <header className="App-header">
       
      
      </header>
    </div>
  );
}

export default App;
