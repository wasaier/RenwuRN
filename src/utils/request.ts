import storage from './storage';

/**
 * @description make querystring from object
 * @param obj 
 * @returns 
 */
export const qs = (obj: Record<string, any>) => {
  let qsList: string[] = [];
  Object.keys(obj || {}).forEach(key => {
    qsList.push(`${key}=${obj[key]}`)
  })
  return qsList.join('&')
}

/**
 * @description
 * @param params 
 * @returns 
 */
export const request = async (params: any) => {
  let url = params.url;
  let method = params.method;

  const qsList = []
  const userInfo: any = await storage.getItem('userInfo') || {};
  const token = userInfo.token || '';
  if (token) qsList.push(`token=${token}`);

  if (url.indexOf('?') === -1) {
    url += ('?' + qsList.join('&'));
  } else {
    url = url + '&' + `${qsList.join('&')}`
  }

  try {
    let ret = await fetch(url, {
      method,
      body: params.data,
      headers: params.headers || {}
    });
    const res = await ret.json();
    console.log(`api_res: ${url} ${JSON.stringify(res)}`);
    return {
      ...res,
      success: +res.retCode === 0 
    }
  } catch (error) {
    // http 请求错误不抛出错误
    console.log(`api_error: ${url} ${error}`);
  }
}

export default {
  get: async (params: any, option = {auth: true}) => {
    let url = params.url;
    let qsList = [];
    if (params.data) {
      Object.keys(params.data).forEach(key => {
        qsList.push(`${key}=${params.data[key]}`)
      })
    }

    if (!option.auth) {
      const userInfo: any = await storage.getItem('userInfo') || {};
      const token = userInfo.token || '';
      if (token) qsList.push(`token=${token}`);
    }

    if (url.indexOf('?') === -1) {
      url += ('?' + qsList.join('&'));
    } else {
      url = url + '&' + `${qsList.join('&')}`
    }

    try {
      let ret = await fetch(url, {
        method: "GET"
      });
      const res = await ret.json();
      if (+res.retCode === 0) {
        return {
          ...res,
          success: true
        }
      } else {
        return {
          ...res,
          success: false
        }
      }
    } catch (error) {
      // http 请求错误不抛出错误
      console.log('GET_接口调用失败', url, error);
    }
  },
  delete: async (params: any) => {
    let url = params.url;
    let qsList = [];
    if (params.data) {
      Object.keys(params.data).forEach(key => {
        qsList.push(`${key}=${params.data[key]}`)
      })
    }
    const userInfo: any = await storage.getItem('userInfo') || {};
    const token = userInfo.token || '';
    if (token) qsList.push(`token=${token}`);

    if (url.indexOf('?') === -1) {
      url += ('?' + qsList.join('&'));
    } else {
      url = url + '&' + `${qsList.join('&')}`
    }

    try {
      let ret = await fetch(url, {
        method: "DELETE"
      });
      const res = await ret.json();
      return { ...res, success: +res.retCode === 0};
    } catch (error) {
      // http 请求错误不抛出错误
      console.log('DELETE_接口调用失败', url, error);
    }
  },
  post: async (params: any) => {
    let url = params.url;
    const userInfo: any = await storage.getItem('userInfo') || {};
    const token = userInfo.token || '';

    if (url.indexOf('?') === -1) {
      url = url + `?token=${token}`
    } else {
      url = url + `&token=${token}`
    }

    try {
      let ret = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params.data || {})
      });
      const res = await ret.json();
      return { ...res, success: +res.retCode === 0};
    } catch (error) {
      // http 请求错误不抛出错误
      console.log('POST_接口调用失败', url, error);
    }
  }
};
