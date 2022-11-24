import { useState } from "react"

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${title} and  ${content}`)
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
 
export default CreateProject;