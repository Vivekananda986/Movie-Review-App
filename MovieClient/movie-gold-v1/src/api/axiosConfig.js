import axios from 'axios';
export default axios.create({
  baseURL:'https://2582-49-205-211-72.ngrok-free.app',
  headers:{"ngrok-skip-browser-warning":"true"}
});