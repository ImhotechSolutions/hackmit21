import data from './sample/sample-patient-data.json';
import axios from 'axios';
import parse from 'html-react-parser';
import { useState } from 'react';

function App() {
  const [ patientData, setPatientData ] = useState({});
  const { entry } = data;
  const config = {
    method  : 'get',
    url     : `${process.env.REACT_APP_API_URL}/Patient`,
    headers : {
      'x-api-key' : process.env.REACT_APP_XAPIKEY
    }
  };

  const fetchPatientData = async () => {
    return axios(config).then(({ data }) => {
      const { entry: patientData } = data;
      console.log(patientData);
      return patientData;
    });

    // const { entry: patientData } = response.data;
    // console.log('DATA:' + patientData.length);

    // return patientData;

    // .map(
    //   person => <p key={person.resource.id}>{person.resource.name[0].given}</p>
    //   // console.log(person.resource.name[0])
    // );
  };

  const handleButton = () => {
    setPatientData(fetchPatientData);
    console.log(patientData);
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
      <button onClick={handleButton}>Get data</button>
      {/* <div>
        {parse(
          '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testreport-example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878</p><p><b>name</b>: TestReport Example for TestScript Example</p><p><b>status</b>: completed</p><p><b>testScript</b>: <a>TestScript/testscript-example</a></p><p><b>result</b>: pass</p><p><b>score</b>: 100.0</p><p><b>tester</b>: HL7 Execution Engine</p><p><b>issued</b>: 07/10/2016 8:25:34 AM</p><blockquote><p><b>participant</b></p><p><b>type</b>: test-engine</p><p><b>uri</b>: <a>http://projectcrucible.org</a></p><p><b>display</b>: Crucible</p></blockquote><blockquote><p><b>participant</b></p><p><b>type</b>: server</p><p><b>uri</b>: <a>http://fhir3.healthintersections.com.au/open</a></p><p><b>display</b>: HealthIntersections STU3</p></blockquote><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>DELETE Patient</td><td><a>http://projectcrucible.org/permalink/1</a></td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>HTTP 204</td><td>http://projectcrucible.org/permalink/1</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>POST Patient/fixture-patient-create</td><td><a>http://projectcrucible.org/permalink/1</a></td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>HTTP 201</td><td>http://projectcrucible.org/permalink/1</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Read Patient</p><p><b>description</b>: Read a Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>teardown</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>'
        )}
      </div> */}
    </div>
  );
}

export default App;
