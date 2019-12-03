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
      final.push(<li>{task.title} - {task.done ? 'Done' : 'Not Done'}</li>)
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
    let cloned = [...this.state.tasks];
    let newTodo = {
      _id:333,
      title: this.state.newTodoTitle,
      done:false
    }
    cloned.push(newTodo);
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
