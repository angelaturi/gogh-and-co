import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'Sign In'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(loginUser(user)),
    login: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)