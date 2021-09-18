const KEYS ={
    patients:'patients',
    patientId:'patientId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Antenatal' },
    { id: '2', title: 'Intrapartum' },
    { id: '3', title: 'Post Partum' },
])

export function insertPatient(data) {
    let patients=getAllPatients();
    data['id'] = generatePatientId()
    patients.push(data)
    localStorage.setItem(KEYS.patients,JSON.stringify(patients))
}

export function generatePatientId() {
    if (localStorage.getItem(KEYS.patientId) == null)
        localStorage.setItem(KEYS.patientId, '0')
    var id = parseInt(localStorage.getItem(KEYS.patientId))
    localStorage.setItem(KEYS.patientId, (++id).toString())
    return id;
}

export function getAllPatients() {
    if (localStorage.getItem(KEYS.patients) == null)
        localStorage.setItem(KEYS.patients, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.patients));
}
