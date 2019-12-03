import React from 'react';


class App extends React.Component {
  
  state = {
    tasks : [
      {
        _id: 1,
        title: 'Clean the room',
        done:false
      },
      {
        _id: 2,
        title: 'Wash the clothes',
        done:false
      },
      {
        _id: 3,
        title: 'Buy fruits',
        done: true
      }
    ],
    newTodoTitle:""
  }
  
  displayList() {
    
    let final = [];
    for (let task of this.state.tasks) {
      final.push(<li>{task.title} - {task.done ? 'Done' : 'Not Done'} <button
        onClick={()=>{
          this.deleteTodo(task._id)
        }}
      >x</button></li>)
    }
    return final;
    
    // return this.state.tasks.map( (task) => {
    //   return <li>{task.title} - {task.done}</li>
    // })
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  addTodo = () => {
    // add to the back of an array
   
    // IMMUTABILITY
    const cloned = [
       ...this.state.tasks,
       {
         _id:333,
         title: this.state.newTodoTitle,
         done:false
       }
      ]
    
    this.setState({
      tasks:cloned
    })
    

    // this.setState({
    //   tasks: [...this.state.tasks, {
    //     _id: 333,
    //     title: this.state.newTodoTitle,
    //     done:false
    //   }]
    // })
    
  }
  
  deleteTodo = (id) => {
    // long-wided way
    console.log("id to delete ="+ id)
    
    // step 1. Find the index
    let index = -1; // means not found
    for (let i=0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i]._id === id) {
        index=i;
        break;
      }
    }
    console.log("to delete =" + index)
    // Step 2. Clone the array, and then splice the clone at the index
    let cloned = [...this.state.tasks];
    cloned.splice(index, 1);
    this.setState({
      tasks:cloned
    })
  }
  
  render(){
    return (
     <div>
      <h1>Todos</h1>
      <ul>
        {this.displayList()}
      </ul>
      <div>
        <h2>Add new Todo</h2>
        <input type='text' name='newTodoTitle' value={this.state.newTodoTitle} onChange={this.handleChange}/>
        <button onClick={this.addTodo}>Add</button>
      </div>
     </div>
    );  
  }
  
}

export default App;
