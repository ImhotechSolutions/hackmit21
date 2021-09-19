import React, { useState, useEffect } from 'react';
import { getAll } from '../../services/procedures';

const DataDisplay = () => {
  const [ procedures, setProcedures ] = useState([]);

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

  // Displays a list of all the patients
  return (
    <div>
      {procedures.map(({ resource }) => {
        console.log(resource);
        return <p>{resource.subject.reference}</p>;
      })}
    </div>
  );
};

export default DataDisplay;
