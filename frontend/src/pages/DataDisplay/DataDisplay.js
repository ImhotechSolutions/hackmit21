import React, { useState, useEffect } from 'react';
import { getAll } from '../../services/procedures';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import DataEntry from '../DataEntry/DataEntry';

const DataDisplay = () => {
  const [ procedures, setProcedures ] = useState([]);

  useEffect(() => {
    retrieveProcedures();
  }, []);

  // For building off of the URL of the current page
  let match = useRouteMatch();

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
        // console.log(resource);
        return (
          <div key={resource.id}>
            <Link to={`${match.url}/${resource.id}`}>Procedure/{resource.id}</Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default DataDisplay;
