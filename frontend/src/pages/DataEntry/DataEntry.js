import React from 'react';

const DataEntry = props => {
  console.log(props.match.params.id);
  return <h3>Requested topic ID: {props.match.params.id}</h3>;
};

export default DataEntry;
