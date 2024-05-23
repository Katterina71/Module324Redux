import '../App.css';
import { useState } from 'react';
// import randomLibrary from "randomLibrary"
function Main() {

  const [text, setText]=useState({text:"Level 1 done"})
  // Not need setText
  // setText('')


  return (
    <div className="App">
        {/* Correctly access the text property */}
        {text.text}
        {/* {text.text.level1.main}
        {text} */}
    </div>
  );
}

export default Main;
