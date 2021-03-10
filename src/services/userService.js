import http from './httpService';

const apiEndpoint = '/users';

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
  });
}

export function getUsers() {
  return http.get(apiEndpoint);
}
