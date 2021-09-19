import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/procedures';

const DataEntry = props => {
  const [ procedures, setProcedures ] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    retrieveProcedures();
  }, []);

  // Gets an array of all the procedures from the backend
  const retrieveProcedures = () => {
    getAll().then(response => {
      console.log(response.data);
      setProcedures(response.data);
    });
  };

  const procedure = procedures.find(pro => pro.resource.id === id);
  console.log(id);
  return (
    <div>
      <h1>Requested topic ID: {id}</h1>
      {procedure ? <pre>{JSON.stringify(procedure.resource, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default DataEntry;
