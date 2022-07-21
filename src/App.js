import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import  React from 'react';
import AddTodo from './Components/AddTodo';

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete", todo)
    
  
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }));
  }
  
  const addTodo = (title ,desc ) => {
    console.log(title , desc);
    let sno = todos[todos.length -1].sno + 1;
    const myTodo ={
      sno :sno,
      title: title,
      desc: desc
    }
    setTodos([...todos , myTodo]);
    console.log(todos);
  }


  const[todos, setTodos] = React.useState([
    {
      sno: 1,
      title: "Complete DSA",
      desc: "Practise Questions with theory"
    },
    {
      sno: 2,
      title: "Complete React",
      desc: "Build some awesome frontend Projects"
    },
    {
      sno: 3,
      title: "Get start with Node JS after completing React",
      desc: "Build major project of full-stack"
    }
  ])
    

  return (
    <>
      <Header title="My Todos-List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos ={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
