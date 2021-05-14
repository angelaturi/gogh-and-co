import React from 'react';
import SigninButton from './signin_button';
import Goghgle from '../goghgle';
import {Redirect, Route} from 'react-router-dom';

class AccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
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
        for(let i = 1; i < 10; i++){
            window.setTimeout(() => this.setState({first_name: 'Mona Lisa'.slice(0, i)}), 100 * i);
        }
        for(let i = 1; i < 11; i++){
            window.setTimeout(() => this.setState({last_name: 'Gherardini'.slice(0, i)}), 1000 + 100 * i);
        }
        for(let i = 1; i < 23; i++){
            window.setTimeout(() => this.setState({email: 'monalisa@demoemail.com'.slice(0, i)}), 2000 + 100 * i);
        }
        for(let i = 1; i < 9; i++){
            window.setTimeout(() => this.setState({password: 'louvre123'.slice(0, i)}), 4000 + 100 * i);
        }

        window.setTimeout(() => this.props.login({user: this.state}), 4100)
    }

    signup(e) {
        e.preventDefault()
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
                            <div className="signin-heading" id="create-account">
                                <Goghgle />
                                <h1>Create your Goghgle Account</h1>
                            </div>

                            <div className="signin-body">
                            <div className="signin-body-box">
                                <div className="signin-body-small-box">

                                    <div id="name">
                                        <div className="session-input">
                                            <input 
                                                autoFocus
                                                type="text"
                                                value={this.state.first_name}
                                                placeholder=" "
                                                onChange={this.update('first_name')}
                                                className="session-text"
                                            />
                                            <label className="session-label">First name</label>
                                        </div>
                                
                                        <div className="session-input">
                                            <input 
                                                type="text"
                                                value={this.state.last_name}
                                                placeholder=" "
                                                onChange={this.update('last_name')}
                                                className="session-text"
                                            />
                                            <label className="session-label">Last name</label>
                                        </div>
                                    </div>

                                    <div className="session-input">
                                        <input 
                                            type="text"
                                            value={this.state.email}
                                            placeholder=" "
                                            onChange={this.update('email')}
                                            className="session-text"
                                        />
                                        <label className="session-label">Your email address</label>
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
                                        <p id="signin-demo">or explore site with a <a onClick={this.demologin}>demo account</a></p>
                                    </div>

                                </div>

                                <div className="form-btn">
                                    <button className="form-submit">{this.props.formType}</button>
                                    <Route path="/signup" component={SigninButton} />
                                </div>
                            </div></div>
                        </form>
                    </div></div>
                </div>
            </div>
        )
    }
}

export default AccountForm;