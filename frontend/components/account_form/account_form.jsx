import React from 'react';
import signinButton from './signin_button';
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

    demologin() {
        this.props.login({email: 'monalisa@demoemail.com', password: 'louvre' })
    }

    signup(e) {
        e.preventDefault()
    }

    render() {
        const {currentUser, errors} = this.props
        return (
            <div className="form-background">
                {/* {currentUser ? <Redirect to="/" /> : ""} */}
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
                                        <div className="errors" key={error.id}>
                                            <svg className="errors-icon" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                                            </svg>
                                            {error}
                                        </div>
                                    )) : "" }
                                    
                                    <div className="signin-body">
                                        <p id="signin-demo">or explore site with a <a onClick={this.demologin}>demo account</a></p>
                                    </div>

                                    <div className="form-btn">
                                        <input type="submit" className="form-submit"/>{this.props.formType}
                                        <Route path="/signup" component={signinButton} />
                                    </div>

                                    </div></div>
                            </div>
                        </form>
                    </div></div>
                </div>
            </div>
        )
    }
}

export default AccountForm;