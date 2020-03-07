import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../../actions/profile_actions';
import ProfileForm from './profile_form';

const mapStateToProps = (state, ownProps) => ({
    profile: Object.values(state.entities.profiles)[0],
    state: state
});

const mapDispatchToProps = dispatch => ({
    fetchProfile: userId => dispatch(fetchProfile(userId)),
    updateProfile: profile => dispatch(updateProfile(profile))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForm);