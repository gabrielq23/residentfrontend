import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// HARDCODED A LIST OF PEOPLE TO TEST OUT FIRST
const listOfPeople = [
  { id: 1, name: 'John', preference: 'Food', birthYear: 1940},
  { id: 2, name: 'Alice', preference: 'Sport', birthYear: 1967},
  { id: 3, name: 'Bob', preference: 'Leisure', birthYear: 1987},
  { id: 4, name: 'Jack', preference: 'Food', birthYear: 1956},
  { id: 5, name: 'Sam', preference: 'Sport', birthYear: 1955},
  { id: 6, name: 'Max', preference: 'Sport', birthYear: 1964},
];

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /*
  useEffect(() => {
    axios.get('api link here') 
      .then(response => {
        setPeople(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  */

  const filteredPeople = listOfPeople.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.preference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.birthYear.toString().includes(searchTerm)
  );

  // PLACEHOLDER CODE FOR VIEWING PROFILE
  const viewProfile = (personId) => {
    const person = listOfPeople.find((person) => person.id === personId);
    navigate(`/profile/${personId}`, { state: { person } });
  };

  return (
    <div className="MainPage">
      <h2>Residents</h2>
      <input
        type="text"
        placeholder="Search by name or preference"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/*CONFIGURE BUTTON TO ADD NEW RESIDENT HERE*/}
      <button>Add New Resident (NOT IMPLEMENTED)</button>

      {/*USING HARDCODED LIST OF PEOPLE FOR NOW, IMPLEMENT LATER WHEN WE ACTUALLY GET PROPER DATA*/}
      <div className="person-card-container">
        {filteredPeople.map((person) => (
          <div className="person-card" key={person.id}>
            <h2>{person.name}</h2>
            <p><strong>Preference:</strong> {person.preference}</p>
            <p><strong>Birth Year:</strong> {person.birthYear}</p>
            <button onClick={() => viewProfile(person.id)}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;