const httpRequestHelper = (url, success, fail) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onload = function() {
    if (xhr.status === 200 && xhr.readyState === 4 && xhr.getResponseHeader('content-type') !== 'text/html') {
      let response = JSON.parse(xhr.responseText);
      success(response);
      xhr = null;
    }
    else {
      fail(xhr.status + ':' + xhr.response);
      xhr = null;
    }
  }
  xhr.onerror = function (e) {
    fail(e.target.status);
    xhr = null;
  }
  xhr.send(null);
};

module.exports = httpRequestHelper;
