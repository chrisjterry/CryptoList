import { connect } from 'react-redux';
import { logout, clearSessionErrors, signup } from '../../actions/session_actions'
import NavBar from './nav_bar'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    signup: user => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);