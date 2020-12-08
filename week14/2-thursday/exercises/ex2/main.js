function stringifyFormData(fd) {
    const data = {};
    for (let field of fd.keys()) {
      data[field] = fd.get(field);
    }
    return JSON.stringify(data, null, 2);
  }

  async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      data // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    postData('http://localhost:3001/books', stringified);
  }
  
  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);
  