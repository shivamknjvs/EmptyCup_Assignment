import { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import Taskbar from './Componets/TaskBar';
import UserCards from './Componets/UserCards';

function App() {
  const [userData, setUserData] = useState([]);
  const [shortlistedUsers, setShortlistedUsers] = useState([]);
  const [isShortlistedClicked, setIsShortlistedClicked] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));

    // Fetch the list of shortlisted users
    if (isShortlistedClicked) {
      fetchShortlisted();
    }
  }, [isShortlistedClicked]);

  const fetchShortlisted = () => {
    // Fetch the list of shortlisted users from your API
    fetch('http://127.0.0.1:5000/api/users/shortlisted')
      .then(response => response.json())
      .then(data => setShortlistedUsers(data))
      .catch(error => console.error('Error fetching shortlisted users:', error));
  };

  const handleShortlisted = () => {
    setIsShortlistedClicked(!isShortlistedClicked);
  };

  return (
    <div className="app">
      <Navbar />
      <hr />
      <Taskbar handleShortlisted={handleShortlisted} />
      <UserCards userData={isShortlistedClicked ? shortlistedUsers : userData} />
      <br />
    </div>
  );
}

export default App;
