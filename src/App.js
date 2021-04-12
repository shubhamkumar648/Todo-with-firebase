import './App.css';
import {useState,useEffect} from "react";
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase';

function App() {

  const [inputText, setInputText] = useState(" ");
  const [displayText, setDisplayText] = useState([]);

  useEffect(() => {

    //this code run when app load
 db.collection('todo').orderBy('timestamp','desc').onSnapshot(snapshot => {

setDisplayText(snapshot.docs.map(doc => doc.data().todo)
)
 })

  }, [])


  const HandleInput = (event) => {
    setInputText(event.target.value);
  };

  // const HandleClick = (event) => {
  //   event.preventDefault()
  //   setDisplayText((prevItem) => {
  //     return [...prevItem, inputText];
  //   });
  // };


  const HandleClick = (event) => {
   
    event.preventDefault();

    db.collection('todo').add({
         todo: inputText,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })
    // setDisplayText([...displayText,inputText]);
    setInputText('');
  }

  return (
    <div className="App">
     <form>
<input
        type="text"
        onChange={HandleInput}
        value={inputText}
        placeholder="type item"
      />

      <button type="submit" onClick={HandleClick}> Todo </button>
  {
    displayText.map(todo => (

   <Todo text={todo}/>
    ))
  }
  </form>
    </div>
  );
}

export default App;
