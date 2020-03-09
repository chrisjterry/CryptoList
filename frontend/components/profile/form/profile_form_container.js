import { connect } from 'react-redux';
import { fetchProfile, updateProfile, clearProfileErrors } from '../../../actions/profile_actions';
import ProfileForm from './profile_form';

const mapStateToProps = (state, ownProps) => ({
    profile: Object.values(state.entities.profiles)[0],
    state: state,
    errors: state.errors.profile
});

const mapDispatchToProps = dispatch => ({
    fetchProfile: userId => dispatch(fetchProfile(userId)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    clearProfileErrors: () => dispatch(clearProfileErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForm);