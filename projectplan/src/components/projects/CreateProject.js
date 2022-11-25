import { useState } from "react"
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(title)
    createProject(content)
  }

  return (  
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>

        <div className="input-field">
          <input 
            type="text" 
            id="title" 
            placeholder="Title" 
            onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="input-field">
          <textarea 
            id="content" 
            className="materialize-textarea" 
            placeholder="Content" 
            onChange={e => setContent(e.target.value)}></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);