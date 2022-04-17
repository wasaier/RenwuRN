import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from '@/config/index';
import rootStore from '@/model';
import { qs } from '@/utils/request';

const instance = axios.create({
  baseURL: baseURL
})

function addParamsToURL(url: string, params: Record<string, string|number>) {
  const str = qs(params);
  if (url.includes('?')) {
    return `${url}&${str}`
  }
  return url.includes('?') ? `${url}&${str}` : `${url}?${str}`
}

instance.interceptors.request.use(
  function(config) {
    config.url = addParamsToURL(config.url!, {
      token: (rootStore.userStore.userInfo || {}).token || ''
    });
    return config;
  },
  function(error) {
    console.log('--error', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function(response) {
    console.log(response.request.responseURL, response.data)
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  },
);

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(null), 1200)
  })
}

async function request<T>(options: AxiosRequestConfig): Promise<T> {
  const p1 = instance(options)
  const p2 = sleep();
  return Promise.all([p1, p2]).then(res => {
    return res[0] as unknown as T
  })
}

export { request }