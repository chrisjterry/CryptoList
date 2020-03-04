import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Log In',
    initialState: {
        email: '',
        password: ''
    }
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);