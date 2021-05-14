import React from 'react';
import SignupButton from './signup_button';
import Goghgle from '../goghgle';
import {Redirect, Route} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demologin = this.demologin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return e => (this.setState({[field]: e.target.value}))
    }

    demologin(e) {
        e.preventDefault()

        for(let i = 1; i < 23; i++){
            window.setTimeout(() => this.setState({email: 'monalisa@demoemail.com'.slice(0, i)}), 100 * i);
        }
        for(let i = 1; i < 9; i++){
            window.setTimeout(() => this.setState({password: 'louvre123'.slice(0, i)}), 2000 + 100 * i);
        }

        window.setTimeout(() => this.props.login({user: this.state}), 2000)
    }

    toggleForgot() {
        this.setState({
            forgot: !this.state.forgot
        })
    }

    displayForgot() {
        return <span>Try again.</span>
    }

    render() {
        const {currentUser, errors} = this.props
        return (
            <div className="form-background">
                {currentUser ? <Redirect to="/" /> : ""}
                <div className="content-out">
                    <div className="content-in">
                    <div className="content-padding">
                
                    <form onSubmit={this.handleSubmit}>
                        <div className="signin-heading">
                            <Goghgle />
                            <h1>Sign in</h1>
                            <h2 className="form-h2">Use your Goghgle Account</h2>
                        </div>

                        <div className="signin-body">
                        <div className="signin-body-box">
                            <div className="signin-body-small-box">

                                <div className="session-input">
                                    <input 
                                        type="text"
                                        value={this.state.email}
                                        placeholder=" "
                                        onChange={this.update('email')}
                                        className="session-text"
                                    />
                                    <label className="session-label">Email</label>
                                </div>

                                <div className="session-input">
                                    <input 
                                        type="password"
                                        value={this.state.password}
                                        placeholder=" "
                                        onChange={this.update('password')}
                                        className="session-text"
                                    />
                                    <label className="session-label">Password</label>
                                </div>
                    
                                {errors ? errors.map(error => (
                                    <div className="errors" key={er.id}>
                                        <svg className="errors-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                        </svg>
                                        {error}
                                    </div>
                                )) : "" }
                    
                                <div className="signin-body-text">
                                    <p id="signin-forgot"><a onClick={this.toggleForgot.bind(this)}>Forgot password?</a>{this.state.forgot ? this.displayForgot() : ""}</p>
                                    <p>Explore using demo mode</p>
                                    <a onClick={this.demologin}>Demo mode</a>
                                </div>
                    
                            </div>  

                            <div className="form-btn">
                                <button className="form-submit">{this.props.formType}</button>
                                <Route path="/login" component={SignupButton} />
                            </div>
                            </div></div>
                        </form>
                    </div></div>
                </div>
            </div>
        )
    }
}

export default SessionForm;