import React from 'react';

// don't change the Component name "App"
export default class Formwork extends React.Component {
    constructor() {
        super();
        this.state = {
            card: '',
            email: '',
            isAgreeWithTerms: false,
            emailFlag: false,
        };
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleChange = (event) => {
        this.setState(
            () => ({ [event.target.name]: event.target.value }),
            () => {
                if (this.state.card.length === 16) {
                    this.emailRef.current.focus();
                }
            }
        );
    };

    validateEmail = () => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(this.state.email).toLowerCase())) {
            this.setState({ emailFlag: true });
        } else this.setState({ emailFlag: false });
    };
    onChecked = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    };
    onBtn = () => {
        if (this.state.isAgreeWithTerms && this.state.emailFlag) {
            alert('Huray');
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.length < 16) {
            console.log('invalid card number');
            return;
        }
        this.cardRef.current.value = '';
        this.emailRef.current.value = '';
    };

    componentDidMount() {
        console.log(this.cardRef);
        this.cardRef.current.focus();
    }

    render() {
        // TODO: implement component
        const { card, email } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    maxLength="16"
                    value={card}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                    ref={this.cardRef}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                    ref={this.emailRef}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={this.state.isAgreeWithTerms}
                        onChange={this.onChecked}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.onBtn}>Send</button>
            </form>
        );
    }
}
