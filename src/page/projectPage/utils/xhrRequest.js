export const xhrReq = (url, method, params) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (params) {
      if (method === 'GET') {
        const queryParams = Object.keys(params)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
          .join('&');
        url += '?' + queryParams;
      }
    }

    xhr.open(method, url, true);

    if (method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Request failed with status ${xhr.status}`));
        }
      }
    };

    let requestData = null;

    if (params) {
      if (method === 'POST') {
        requestData = JSON.stringify(params);
      }
    }
    xhr.send(requestData);
  });
}
