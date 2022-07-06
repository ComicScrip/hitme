import http from 'k6/http';

export default function () {
  http.get('https://hitme.wild-projects.duckdns.org');
  //http.get('https://hitme.secret-lab.duckdns.org');
}

export const options = {
  vus: 100,
  duration: '10s',
};
