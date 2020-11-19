let TextInput = () => {
    return <span>Make this component render a styled text input tag</span>
}

let YesNoRadio = () => {
    return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
}

let SubmitButton = () => {
    return <span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
    return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))