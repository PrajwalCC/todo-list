import './App.css';
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import  React from 'react';
import AddTodo from './Components/AddTodo';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  localStorage.getItem("todos")=== null ? initTodo =[] :
  initTodo=JSON.parse(localStorage.getItem("todos")); 

  const onDelete = (todo) => {
    console.log("I am onDelete", todo)
    
  
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }));
  }
  
  const addTodo = (title ,desc ) => {
    console.log(title , desc);
    let sno;
    if(todos.length === 0){
      sno = 0;
    }else{

    sno = todos[todos.length -1].sno + 1;
    }
    const myTodo ={
      sno :sno,
      title: title,
      desc: desc
    }
    {title !== "" && desc !== "" && setTodos([...todos , myTodo])};
    console.log(todos);
  }


  const[todos, setTodos] = React.useState(initTodo);

  React.useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
    
  
  return (
    <>
    <Router>
      <Header title="My Todos-List" />
        <Switch>
          <Route exact path="/" render ={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos ={todos} onDelete={onDelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
    </Router>  
    </>
  );
}

export default App;
