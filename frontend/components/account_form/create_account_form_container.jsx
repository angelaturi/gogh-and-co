import {connect} from 'react-redux';
import {createUser, loginUser, clearErrors} from '../../actions/session_actions';
import AccountForm from './account_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'Create account'
})

const mapDispatchToProps = dispatch => {
    debugger
    return ({
    processForm: user => dispatch(createUser(user)),
    login: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors())
})
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)