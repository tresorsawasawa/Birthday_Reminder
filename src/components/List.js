import React from 'react';
import PropTypes from 'prop-types';

const List = ({ people }) => (
  <>
    {people.map((person) => {
      const {
        id, name, age, image,
      } = person;
      return (
        <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </article>
      );
    })}
  </>
);

List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  people: [],
};

export default List;
