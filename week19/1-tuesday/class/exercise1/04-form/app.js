let TextInput = () => {
    return (
        <div>
              <input></input>
        </div>
    )
    //<span>Make this component render a styled text input tag</span>
}

let YesNoRadio = () => {
    return (
        <div>
            <input type="radio" id="yes" value="yes" />
            <label for="yes">Yes</label><br />
            <input type="radio" id="no" value="no" />
            <label for="no">No</label><br />
        </div>
    )
    //<span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
}

let SubmitButton = () => {
    return (
        <div>
            <input type="submit">Submit</input>
        </div>
    )
    //<span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
    return (
        <div>
            <TextInput />
            <TextInput />
            <TextInput />
            <YesNoRadio />
            <YesNoRadio />
            <SubmitButton />
        </div>
    )
    //<span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))