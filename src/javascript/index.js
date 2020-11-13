import '../css/style.css';
import { makeApiCall } from './helpers';
import domMapper from './domDataMapper';

makeApiCall()
  .then((res) => domMapper(res.viewer))
  .catch(console.error);
