import axios from 'axios';

const KEYS = {
  patients  : 'patients',
  patientId : 'patientId'
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Antenatal' },
  { id: '2', title: 'Intrapartum' },
  { id: '3', title: 'Post Partum' }
];

export function insertPatient(data) {
  let patients = getAllPatients();
  data['id'] = generatePatientId();
  patients.push(data);
  console.log(data);
  localStorage.setItem(KEYS.patients, JSON.stringify(patients));
}

export function generatePatientId() {
  if (localStorage.getItem(KEYS.patientId) == null) localStorage.setItem(KEYS.patientId, '0');
  var id = parseInt(localStorage.getItem(KEYS.patientId));
  localStorage.setItem(KEYS.patientId, (++id).toString());
  return id;
}

export function getAllPatients() {
  if (localStorage.getItem(KEYS.patients) == null)
    localStorage.setItem(KEYS.patients, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.patients));
}

var data = JSON.stringify({
  resourceType      : 'Procedure',
  id                : '9000',
  text              : {
    status : 'generated',
    div    : '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy</div>'
  },
  status            : 'completed',
  code              : {
    coding : [
      {
        system  : 'http://snomed.info/sct',
        code    : '80146002',
        display : 'Appendectomy (Procedure)'
      }
    ],
    text   : 'Appendectomy'
  },
  subject           : {
    reference : 'Patient/12345'
  },
  performedDateTime : '2013-04-05',
  recorder          : {
    reference : 'Practitioner/me',
    display   : 'Dr Cecil Surgeon'
  },
  asserter          : {
    reference : 'Practitioner/me',
    display   : 'Dr Cecil Surgeon'
  },
  performer         : [
    {
      actor : {
        reference : 'Practitioner/me',
        display   : 'Dr Cecil Surgeon'
      }
    }
  ],
  reasonCode        : [
    {
      text : 'Generalized abdominal pain 24 hours. Localized in RIF with rebound and guarding'
    }
  ],
  followUp          : [
    {
      text : 'ROS 5 days  - 2013-04-10'
    }
  ],
  note              : [
    {
      text : 'ABCD TEST'
    }
  ],
  meta              : {
    tag : [
      {
        system  : 'http://terminology.hl7.org/CodeSystem/v3-ActReason',
        code    : 'HTEST',
        display : 'test health data'
      }
    ]
  }
});

var config = {
  method  : 'post',
  url     : 'https://fhir.r9ymi5mtircd.static-test-account.isccloud.io/Procedure',
  headers : {
    'x-api-key'    : 'lub5FpRi5Z7vHPOx5MfV6p08yU3gHyt8mjw9LLg8',
    'Content-Type' : 'application/json'
  },
  data    : data
};

axios(config)
  .then(function(response) {
    console.log(response.headers);
  })
  .catch(function(error) {
    console.log(error);
  });
