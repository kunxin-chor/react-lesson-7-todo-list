import React from "react"
import 'bulma/css/bulma.css'
export default function EditTask(props)
{
    
    // if show props is true, display the modal box
    let classString = "modal";
    if (props.show) {
        classString +=" is-active";
    }
    
    return (
        <div className={classString}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{props.task.title}</p>
              <button className="delete" aria-label="close" onClick={props.cancel}></button>
            </header>
            <section className="modal-card-body">
              <input type='text' value={props.task.title} onChange={props.handleChange} onCancel={props.cancel}/>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button" onClick={props.cancel}>Cancel</button>
            </footer>
          </div>
        </div>
     )
}