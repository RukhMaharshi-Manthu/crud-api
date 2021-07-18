import React, { useState } from "react";
function Form({ content }) {
  const nameE1 = React.useRef(null);
  const usernameE1 = React.useRef(null);
  const genE1 = React.useRef(null);
  const genE2 = React.useRef(null);
  const dateE1 = React.useRef(null);
  const bioE1 = React.useRef(null);
  const addE1 = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameE1.current.value,
      username: usernameE1.current.value,
      gender1: genE1.current.checked,
      gender2: genE2.current.checked,
      dateofbirth: dateE1.current.value,
      bio: bioE1.current.value,
      address: addE1.current.value
    };

    console.log(data);
  };
  return (
    <div>
      {/* Header and go back to the main page section */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter name" ref={nameE1} />

        <label>User Name</label>
        <input type="text" placeholder="Enter Username" ref={usernameE1} />

        <div style={{ display: "flex" }}>
          <label>Gender: :</label>
          <label>
            Male
            <input type="radio" name="gen" ref={genE1} />
          </label>

          <label>
            Female
            <input type="radio" name="gen" ref={genE2} />
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <label>DOB</label>
          <input type="date" ref={dateE1} />
        </div>

        <label>Bio</label>
        <textarea ref={bioE1}></textarea>

        <label>Address</label>
        <textarea ref={addE1}></textarea>

        <label>profile photo</label>
        <input type="file" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export { Form };
