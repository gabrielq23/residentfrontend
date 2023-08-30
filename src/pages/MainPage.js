import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// HARDCODED A LIST OF PEOPLE TO TEST OUT FIRST
const listOfPeople = [
  { id: 1, name: 'John', preferences: ['Food', 'Music'], birthYear: 1940 },
  { id: 2, name: 'Alice', preferences: ['Sport', 'Travel'], birthYear: 1967 },
  { id: 3, name: 'Bob', preferences: ['Leisure', 'Travel'], birthYear: 1987},
  { id: 4, name: 'Jack', preferences: ['Food', 'Sport'], birthYear: 1956},
  { id: 5, name: 'Sam', preferences: ['Sport'], birthYear: 1955},
  { id: 6, name: 'Max', preferences: ['Sport'], birthYear: 1964},
];

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // placeholder code for reading api
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

  const filteredPeople = listOfPeople.filter((person) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      person.name.toLowerCase().includes(searchTermLower) ||
      (person.preferences && person.preferences.some((preference) =>
        preference.toLowerCase().includes(searchTermLower)
      )) ||
      person.birthYear.toString().includes(searchTerm)
    );
  });

  // placeholder code for viewing profile
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
            <p><strong>Preferences:</strong> {person.preferences ? person.preferences.join(', ') : 'No preferences'}</p>
            <p><strong>Birth Year:</strong> {person.birthYear}</p>
            <button onClick={() => viewProfile(person.id)}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;