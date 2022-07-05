import http from 'k6/http';

export default function () {
  http.get('http://localhost:5000/payload?items=50');
}

export const options = {
  vus: 100,
  duration: '10s',
};
