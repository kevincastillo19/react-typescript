import { useState } from 'react';
import './App.css';
import { Card } from './components/card';
import { Form } from './components/form';
import { Person } from './interfaces/person.i';

function App() {

  const [persons, setPersons] = useState<Person[]>([])
  const handleAdd = (newPerson:Person) => {
    setPersons([...persons, newPerson])
  }
  const handleRemove = (personId:number) => {
    setPersons(persons.filter(p => p.id !== personId))
  }
  return (
    <div className="App m-5">      
      <div className="flex flex-row">
        <div className="flex-column w-1/4">
        <h1 className="font-bold text-xl">List of persons</h1>
          <Form handleAddPerson={handleAdd} />
        </div>
        <div className="flex-column w-auto my-3">
          {persons.map((p) => (
            <Card
              person={p}
              handleRemove={handleRemove}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
