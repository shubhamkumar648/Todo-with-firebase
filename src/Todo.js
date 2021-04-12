import './Todo.css';

const Todo = (props) => {
 

  return (
    <div className = "todoList">
      <li style = {{margintop:"10px" }}> {props.text} </li>

    
      
    </div>
  );
};

export default Todo;
