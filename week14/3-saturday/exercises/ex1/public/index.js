function stringifyFormData(fd) {
    const data = {};
    for (let field of fd.keys()) {
      data[field] = fd.get(field);
    }
    return JSON.stringify(data, null, 2);
  }

  async function postData(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    });
    return response.json();
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    postData('http://localhost/author', stringified);
  }
  
  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);
  