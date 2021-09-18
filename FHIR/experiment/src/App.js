import data from './sample/sample-patient-data.json';

function App() {
  const { entry } = data;

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

      {entry.map(person => <p key={person.resource.id}>{person.resource.name[0].given}</p>)}
    </div>
  );
}

export default App;
