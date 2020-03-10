import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions'
import NavBar from './nav_bar'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);