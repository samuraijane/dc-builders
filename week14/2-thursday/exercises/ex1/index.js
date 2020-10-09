
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const publicationDate = document.getElementById('publicationDate');
    
    form.addEventListener('submit', function (e){
        e.preventDefault();

        console.log(title.value);
        console.log(author.value);
        console.log(publicationDate.value);


    }); 



