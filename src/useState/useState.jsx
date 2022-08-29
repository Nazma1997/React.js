import React from 'react';
import {useState} from 'react';



const Todo = () => {
     
      const [todo, setTodo] = useState('');
      const [warning, setWarning] = useState(null);
      
      const handleInput = event => {
        const inputValue = event.target.value;

        const updatedWarning = inputValue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?' : null;


        setTodo(inputValue);
        setWarning(updatedWarning);

      }

  return(
    <div>
         <p>{todo}</p>
         <p>
           <textarea name="todo" value={todo} onChange={handleInput} />
         </p>

         <hr />

         <h2>{warning || 'Good Choice'}</h2>
           
    </div>
  )
}


export default Todo;