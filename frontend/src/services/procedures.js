import http from '../http-common';

// Return a list of all procedures
export const getAll = () => {
  return http.get('/');
};

// Get a specific procedure
export const getTest = id => {
  return http.get(`/${id}`);
};

// Post a procedure
export const post = data => {
  return http.post('/');
};
