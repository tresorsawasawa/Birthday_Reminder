import React, { useState } from 'react';
import List from './components/List';
import data from './components/Data';

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>
          {people.length}
          {' '}
          birthdays today
        </h3>
        <List people={people} />
        <button type="button" onClick={handleClick}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
