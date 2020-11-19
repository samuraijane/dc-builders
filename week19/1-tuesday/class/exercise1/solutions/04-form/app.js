let TextInput = () => {
    return <input placeholder="Text here"></input>
}

let YesNoRadio = () => {
    return (<div>
        <input type="radio" id="yes" name="form-yesno" value="yes" />
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name="form-yesno" value="no" />
        <label htmlFor="no">No</label>
    </div>);
}

let SubmitButton = () => {
    return <button>Submit</button>
}

let Form = () => {
    return (<div>
        <form>
            <TextInput /><br />
            <TextInput /><br />
            <TextInput /><br />
            <YesNoRadio />
            <SubmitButton />
        </form>
    </div>);
}


ReactDOM.render(<Form />, document.getElementById('root'))