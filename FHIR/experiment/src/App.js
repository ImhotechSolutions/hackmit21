import data from './sample/sample-patient-data.json';
import axios from 'axios';

function App() {
  const { entry } = data;
  const config = {
    method  : 'get',
    url     : `${process.env.REACT_APP_API_URL}/Patient`,
    headers : {
      'x-api-key' : process.env.REACT_APP_XAPIKEY
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      {axios(config)
        .then(function(response) {
          console.log(JSON.stringify(response.data));
          const { entry: patientData } = response.data;
          console.log(patientData);
          patientData.map(person => (
            <p key={person.resource.id}>{person.resource.name[0].given}</p>
          ));
        })
        .catch(function(error) {
          console.log(error);
        })}

      {/* {patientData.map(person => <p key={person.resource.id}>{person.resource.name[0].given}</p>)} */}
    </div>
  );
}

export default App;
