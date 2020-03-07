import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceFormContainer from './experiences/experience_form_container';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            user_id: '',
            bio: '',
            role: '',
            location: '',
            about: '',
            achievements: '',
            skills: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchProfile(this.props.match.params.id);
    }

    componentDidUpdate() {
        if (this.state.id != this.props.profile.id) {
            this.setState(this.props.profile)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const profile = Object.assign({}, this.state);
        this.props.updateProfile(profile);
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
            // $(e.target).attr('size', $(e.target).val().length);
        };
    }

    render() {
        const { profile } = this.props;

        if (!profile) return null;

        return(
            <div className='profile-form-div'>
                <div className='cover-photo'></div>
                <div className='form-container'>
                    <form className='profile-header' onSubmit={this.handleSubmit}>
                        <div>
                            <div className='profile-picture'>
                                <img src='/assets/user_icon.png'/>
                            </div>
                            <div>
                                <h1>{profile.name}</h1>
                                <input 
                                    className='bio'
                                    type="text"
                                    value={this.state.bio}
                                    placeholder='Your mini-resume'
                                    onChange={this.handleInput('bio')}
                                    size={this.state.bio.length}
                                />
                                <div>
                                    <label><i className="fas fa-tag"></i>
                                        <input 
                                            className='role'
                                            type="text"
                                            value={this.state.role}
                                            placeholder='Your primary role'
                                            onChange={this.handleInput('role')}
                                            size={this.state.role.length}
                                        />
                                    </label>
                                    <label><i className="fas fa-map-marker"></i>
                                        <input 
                                            className='location'
                                            type="text"
                                            value={this.state.location}
                                            placeholder='Your location'
                                            onChange={this.handleInput('location')}
                                            size={this.state.location.length}
                                        />    
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='links'>
                            <Link className='link' to={`/profiles/${profile.user_id}`} >👁 View public profile</Link>
                            <button>✎ Save</button>
                        </div>
                    </form>
                    <ExperienceFormContainer className='test123'/>
                    <form onSubmit={this.handleSubmit}>
                        <div className='about-div-header'>
                            <h2>ABOUT</h2>
                            <button>✎ Save</button>
                        </div>
                        <div className='about-div'>
                            <label>WHAT I DO
                                <textarea
                                    placeholder='Describe what you are up to.'
                                    onChange={this.handleInput('about')} 
                                    value={this.state.about}
                                />
                            </label>
                            <label> ACHIEVEMENTS
                                <textarea
                                    placeholder={'Describe the most impressive things you\'ve done'}
                                    onChange={this.handleInput('achievements')} 
                                    value={this.state.achievements}
                                />
                            </label>
                            <label> SKILLS
                                <textarea
                                    placeholder='Add your skills.'
                                    onChange={this.handleInput('skills')} 
                                    value={this.state.skills}
                                />
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileForm;