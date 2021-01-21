import { useRef,useEffect } from 'react'

import {Container,Form} from 'react-bootstrap';
import './App.css';

function App() {
  const inputbox = useRef(null)
  useEffect(() => {
    inputbox.current.addEventListener('keypress',function(e){
      if(e.keyCode === 13) {
          e.preventDefault();
      }
  });
  });

  function handleTodoText(e){
              console.log(e.target.value);
              if(e.keyCode === 13) {
              e.preventDefault();
              console.log(e.target.value);
          }
  }
  return (
    <div className="App">
      <Container>
        <header>
          Todo List
          <div className="SearchBar">
            <Form.Control ref={inputbox} onChange = {(e)=>handleTodoText(e)} placeholder={'type anything and press Enter'}/>
          </div>
        </header>
        
      </Container>
    </div>
  );
}

export default App;
