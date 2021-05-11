import {connect} from 'react-redux';
import {createAccount, login, clearErrors} from '../../actions/session_actions';
import AccountForm from './account_form';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'Create account'
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(createAccount(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)