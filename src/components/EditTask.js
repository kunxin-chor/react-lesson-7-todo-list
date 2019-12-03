import React from "react"
import 'bulma/css/bulma.css'
export default function EditTask(props)
{
    
    // if show props is true, display the modal box
    let classString = "modal";
    if (props.current_edit_id === props.task._id) {
        classString +=" is-active";
    }
    
    return (
        <div className={classString}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{props.task.title}</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <input type='text' value={props.task.title}/>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
        </div>
     )
}