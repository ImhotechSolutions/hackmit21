import http from '../http-common';

export const getAll = () => {
  return http.get('/');
};
