
function renderSurveys(surveys) {
    var surveysHTML = surveys.map(function(survey){
        return `
            <form class="mx-auto my-5 w-50">
                <h1>${survey.title}</h1>
                <hr />
                ${renderFields(survey.fields)}
                <button class="btn btn-primary" type="submit">${survey.submitButtonText}</button>
            </form>
        `
    });

    return `
        <div class=" mt-5">
            ${surveysHTML.join('')}
        </div>
    `
}

function renderFields(fields) {
    var fieldsHTML = fields.map(function(field, index){
        if (field.type === "radio") {
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    ${field.options.map(function(option) {
                        return `
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio${index}" value="${option}"/>
                                <label class="form-check-label">${option}</label>
                            </div>
                        `
                    }).join('')}

                </div>
            `
        } else if (field.type === "text") {
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    <textarea ></textarea>
                </div>
            `
        }
    });

    return fieldsHTML.join('');
}

function surveys() {
    var content = document.getElementById('content');

    axios.get('/api/surveys').then(function (response) {
        content.innerHTML = renderSurveys(response.data);
    });


}