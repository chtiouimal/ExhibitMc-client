import { useState } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = async (method, url, body = null, headers = {}) => {
    try {
      setLoading(true);
      const response = await axios({ method, url, data: body});
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getUrl = (url) => {
    return import.meta.env.VITE_BASE_URL + url
  }
 
  const get = (url, headers = {}) => request('GET', getUrl(url), null, headers);
  const post = (url, body, headers = {}) => request('POST', getUrl(url), body, headers);
  const put = (url, body, headers = {}) => request('PUT', getUrl(url), body, headers);
  const del = (url, headers = {}) => request('DELETE', getUrl(url), null, headers);

  return { data, loading, error, get, post, put, del };
};

export default useAxios;
