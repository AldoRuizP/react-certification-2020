import { useLocation } from 'react-router-dom';

function GetQueryParam(key) {
  const query = new URLSearchParams(useLocation().search);
  return query.get(key);
}

export default GetQueryParam;
