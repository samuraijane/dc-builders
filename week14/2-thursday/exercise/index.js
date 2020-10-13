function stringifyFormData(fd) {
    const data = {
        title: fd.get("title"),
        firstName: fd.get("firstName"),
        lastName: fd.get("lastName"),
        publicationDate: fd.get("publicationDate"),
    };
    return JSON.stringify(data, null, 2);
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return response.json();
}

const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    postData('http://localhost:3001/authors', stringified).then(data => console.log(data));
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
