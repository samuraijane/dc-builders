function stringifyFormData(fd) {
    const data = {
        title: fd.get("title"),
        author: fd.get("author"),
        publicationDate: fd.get("publicationDate"),
    };
    return JSON.stringify(data, null, 3);
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
}

const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    postData('http://localhost:3001/books', stringified).then();
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
