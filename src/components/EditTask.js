import React from "react"
import 'bulma/css/bulma.css'


export default class EditTask extends React.Component {

  state = {
    title: ""
  }

  componentDidMount() {
    this.setState(
     {
       ...this.props.task
     }
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  cancel= () => {
    this.props.cancel();
  }
  
  confirm =() => {
    this.props.confirm(this.state._id, this.state.title)
  }

  render() {
    // if show props is true, display the modal box
    let classString = "modal";
    if (this.props.show) {
      classString += " is-active";
    }

    return (
      <div className={classString}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{this.props.task.title}</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.confirm}>Save changes</button>
              <button className="button" onClick={this.cancel}>Cancel</button>
            </footer>
          </div>
        </div>
    )
  }

}
