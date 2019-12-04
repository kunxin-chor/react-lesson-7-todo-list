import React from 'react';
import 'bulma/css/bulma.css'
import EditTask from './components/EditTask'


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
    taskBeingEdited:{
      
    },
    editing:false
  }
  
  displayList() {
    
    let final = [];
    for (let task of this.state.tasks) {
      
      final.push(<li>{task.title} - 
      <input type='checkbox' checked={task.done} onChange={()=>{
        this.updateTodo(task._id)
      }}/>
      
      <button
        onClick={
        ()=>{
          this.deleteTodo(task._id)
        }}  
        style={{marginLeft:'5px'}}
        >x</button>
        
      <button onClick={()=>{
        this.showEdit(task)
      }}>Edit</button>  
      
      
        </li>
      
      )
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
    
    let index = this.state.tasks.findIndex((t)=>{
      return t._id === id;
    })
    
    const cloned = [...this.state.tasks]
  
    cloned.splice(index,1);
    this.setState({
      tasks:cloned
    })
    
  }
  
  updateTodo = (id) => {
    let index = this.state.tasks.findIndex((t)=>{
      return t._id === id
    })
    
    let cloned = [
        ...this.state.tasks.slice(0, index), // spread out the elements from index 0, to index -1
        {
          ...this.state.tasks[index],  // insert the changed copy
          done: !this.state.tasks[index].done
        },
        ...this.state.tasks.slice(index+1) // spread out the elements after the modified copy
      
      ];
      
    this.setState({
      tasks:cloned
    })
  }
  
  showEdit =(task) => {
    this.setState({
      editing: true,
      taskBeingEdited: {
        ...task
      }
    })
  }
  
  cancelEdit = () => {
    this.setState({
      editing:false
    })
  }
  
  confirmEdit = (id, newTitle) => {
    let index = this.state.tasks.findIndex((t)=>{
      return t._id === id
    })
    
    let cloned = [
        ...this.state.tasks.slice(0, index), // spread out the elements from index 0, to index -1
        {
          ...this.state.tasks[index],  // insert the changed copy
          title: newTitle
        },
        ...this.state.tasks.slice(index+1) // spread out the elements after the modified copy
      
      ];
      
    this.setState({
      tasks:cloned,
      editing:false
    })
   
  }
  
  render(){
    return (
     <div className='container content'>
      <EditTask key={this.state.taskBeingEdited._id} 
                show={this.state.editing} 
                task={this.state.taskBeingEdited}
                cancel={this.cancelEdit}
                confirm={this.confirmEdit}
                />
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
