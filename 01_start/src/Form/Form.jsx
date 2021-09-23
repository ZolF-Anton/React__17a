import React from 'react';

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        emailFlag: false,
        lastName: '',
        errorLog: '',
        message: '',
        select: '',
        isAgreeWithTerms: false,
        rgb: 'green',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    validateName = () => {
        if (this.state.firstName.length < 3) {
            this.setState({ errorLog: 'too short' });
        } else this.setState({ errorLog: 'OK' });
    };

    validateEmail = () => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(this.state.email).toLowerCase())) {
            this.setState({ errorLog: 'email - OK' });
            this.setState({ emailFlag: true });
        } else this.setState({ errorLog: 'email Error' });
    };
    onChecked = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    };
    onBtn = () => {
        if (this.state.isAgreeWithTerms && this.state.emailFlag) {
            alert('Huray');
        }
    };

    render() {
        const { firstName, email, lastName } = this.state;
        return (
            <>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        onBlur={this.validateName}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={this.handleChange}
                        onBlur={this.validateEmail}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <p>{this.state.errorLog}</p>
                </div>
                <div>
                    <textarea
                        name="message"
                        value={this.state.message}
                        cols="30"
                        rows="10"
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <select name="select" value={this.state.select} onChange={this.handleChange}>
                        <option value="" disabled></option>
                        <option value="1">1111</option>
                        <option value="2">2222</option>
                        <option value="3">3333</option>
                        <option value="4">4444</option>
                    </select>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isAgreeWithTerms"
                            checked={this.state.isAgreeWithTerms}
                            onChange={this.onChecked}
                        />
                        isAgreeWithTerms
                    </label>
                    <br />
                    <input
                        type="radio"
                        name="rgb"
                        value="red"
                        onChange={this.handleChange}
                        checked={this.state.rgb === 'red'}
                    />
                    RED
                    <input
                        type="radio"
                        name="rgb"
                        value="green"
                        onChange={this.handleChange}
                        checked={this.state.rgb === 'green'}
                    />
                    Green
                    <input
                        type="radio"
                        name="rgb"
                        value="blue"
                        onChange={this.handleChange}
                        checked={this.state.rgb === 'blue'}
                    />
                    Blue
                    <br />
                    <button onClick={this.onBtn}>Send</button>
                </div>
            </>
        );
    }
}

export { Form };
