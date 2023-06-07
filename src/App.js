import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  function onClickHandler(event) {
    event.preventDefault();
    window.location.reload();
  }
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, []);
  // console.log(user)
  return (
    <>
      {user && (
        <div className="container">
          <div>
            <span>
              <h4>Firstname: </h4>
              <span>{user.first_name}</span>
            </span>
          </div>
          <div>
            <span>
              <h4>Lastname:</h4>
              <span>{user.last_name}</span>
            </span>
          </div>
          <div>
            <span>
              <h4>Date of Birth: </h4>
              <span>{user.date_of_birth}</span>
            </span>
          </div>
          <div>
            <span>
              <h4>Gender: </h4>
              <span>{user.gender}</span>
            </span>
          </div>
          <div>
            <span>
              <h4>Email: </h4>
              <span>{user.email}</span>
            </span>
          </div>
          <button onClick={onClickHandler}>Refresh</button>
        </div>
      )}
    </>
  );
};
export default App;
