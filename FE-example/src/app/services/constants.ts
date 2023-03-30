let API: { [id: string]: string } = {
  base: 'http://localhost:3001/',
  simulation: 'simulation/',
};

let loginAPI: { [id: string]: string } = {
  base: 'http://localhost:3030/api/',
};

API = {
  ...API,
  stepSim: API['base'] + API['simulation'],
  financedSim: API['base'] + API['simulation'] + 'financedvsamount',
  socialnumberSim: API['base'] + API['simulation'] + 'socialnumber',
  monthsSim: API['base'] + API['simulation'] + 'months',
  ageSim: API['base'] + API['simulation'] + 'age',
};

loginAPI = {
  ...loginAPI,
  login: loginAPI['base'] + 'login',
  check: loginAPI['base'],
  logout: loginAPI['base'] + 'logout',
  user: loginAPI['base'] + 'user',
};

export { API, loginAPI };
