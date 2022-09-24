import React, { useState } from "react";

function Header() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div class="header">
      <h1 className="name">{name ? name : "Your Name"}</h1>
      <h2>{title ? title : "Job Title"}</h2>
      <button
        type="button"
        className="headerEditBtn"
        onClick={() => toggleEdit()}
      >
        Edit
      </button>

      {edit && (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={() => handleNameChange()}
            required
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={() => handleTitleChange()}
            required
          />
          <button type="button" onClick={() => toggleEdit()}>
            Done
          </button>
        </form>
      )}
    </div>
  );
}

export default Header;
