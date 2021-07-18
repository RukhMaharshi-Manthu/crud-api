import React from "react";
import { useEffect, useState } from "react";
import { NavBar } from "./navBar";
import { AddUserForm } from "./forms/AddUserForm";
import { UserTable } from "./table/UserTable";
import { EditUserForm } from "./forms/EditUserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Form } from "./profileform";
const App = () => {
  
  const [content, setcontent] = useState([]);

  useEffect(() => {
    fetch("https://60e0b0026b689e001788cb6b.mockapi.io/username", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setcontent(data));
  }, []);

  
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const addUser = (user) => {
    user.id = content.length + 1;
    setcontent([...content, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setcontent(content.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setcontent(content.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  
  const [profile, profilechange] = useState([]);

  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <img
              src="https://www.simantel.com/wp-content/uploads/2017/06/welcome.jpg"
              alt="logo"
              height="600px"
            />
          </Route>

          <Route exact path="/listusers">
            <div className="flex-large">
              <h2>View users</h2>
              <UserTable
                users={content}
                editRow={editRow}
                deleteUser={deleteUser}
              />
            </div>
            <div className="flex-large">
              {editing ? (
                <div>
                  <h2>Edit user</h2>
                  <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </Route>

          <Route exact path="/adduser">
            <div className="add-user">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          </Route>

          <Route exact path="/profile">
            <select onChange={(event) => profilechange(event.target.value)}>
              <option>profile</option>
              <option>View profile</option>
              <option>Edit profile</option>
            </select>

            {profile == "Edit profile" ? <Form content={content} /> : ""}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export { App };
