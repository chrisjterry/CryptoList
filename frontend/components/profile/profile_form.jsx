import React from 'react';
import { Link } from 'react-router-dom'

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
        };
    }

    render() {
        const { profile } = this.props;

        if (!profile) return null;

        return(
            <div className='profile-form-div'>
                <div className='cover-photo'></div>
                <form onSubmit={this.handleSubmit}>
                    <div className='profile-header'>
                        <img src='/assets/user_icon.png'/>
                        <div>
                            <h1>{profile.name}</h1>
                            <input 
                                className='bio'
                                type="text"
                                value={this.state.bio}
                                placeholder='Your mini-resume'
                                onChange={this.handleInput('bio')}
                            />
                            <div>
                                <input 
                                    className='role'
                                    type="text"
                                    value={this.state.role}
                                    placeholder='Your primary role (e.g. Operations, Development, Marketing)'
                                    onChange={this.handleInput('role')}
                                />
                                <input 
                                    className='location'
                                    type="text"
                                    value={this.state.location}
                                    placeholder='Your location'
                                    onChange={this.handleInput('location')}
                                />    
                            </div>
                        </div>
                        <Link to={`/profiles/${profile.user_id}`} >View public profile</Link>
                        <button>Save</button>
                    </div>
                    <div>
                        <h2>ABOUT</h2>
                        <button>Save</button>
                    </div>
                    <div className='about-div'>
                        <label> WHAT I DO
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
        )
    }
}

export default ProfileForm;