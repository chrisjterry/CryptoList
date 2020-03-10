import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceFormContainer from './experiences/experience_form_container';
import ProjectFormContainer from './projects/project_form_container';
import EducationFormContainer from './educations/education_form_container';

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
            skills: '',
            profile_picture_url: null,
            profile_picture: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentWillMount() {
        this.props.fetchProfile(this.props.match.params.id);
    }

    componentDidUpdate() {
        if (this.state.id != this.props.profile.id) {
            this.setState(this.props.profile)
            document.addEventListener('click', () => {
                this.props.clearProfileErrors();
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let that = this;
        Object.keys(this.state).forEach( key => {
            if (that.state[key]) formData.append(`profile[${key}]`, that.state[key])
        });
        formData.append('_method', 'PATCH');
        this.props.updateProfile(formData);
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({profile_picture: file, profile_picture_url: fileReader.result});
        };

        if (file) fileReader.readAsDataURL(file);
    }

    render() {
        const { profile, errors } = this.props;

        if (!profile) return null;

        const profileErrors = errors.length ? (
            <div className='profile-errors'>
                <div>
                    <p>An error occurred:</p>
                    <p>{errors.join("\n")}</p>
                    <p>(Click anywhere to continue)</p>
                </div>
            </div>
        ) : (
            null
        );
        
        const profilePicture = this.state.profile_picture_url ? (
            <img src={this.state.profile_picture_url} className='uploaded'/>
        ) : (
            <img src='/assets/user_icon.png' className='default'/>
        );

        return(
            <div className='profile-form-div'>
                {profileErrors}
                <div className='cover-photo'></div>
                <div className='form-container'>
                    <form className='profile-header' onSubmit={this.handleSubmit}>
                        <div>
                            <div className='profile-picture'>
                                <label htmlFor='photo-upload'>
                                    {profilePicture}
                                </label>
                                <input onChange={this.handleFile} id='photo-upload' type="file"/>
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
                            <button id='save-button-1'>Save</button>
                        </div>
                    </form>
                    <ExperienceFormContainer />
                    <ProjectFormContainer />
                    <EducationFormContainer />
                    <form onSubmit={this.handleSubmit}>
                        <div className='about-div-header'>
                            <h2>ABOUT</h2>
                            <button id='save-button-2'>Save</button>
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
                                    placeholder={'Describe the most impressive things you\'ve done.'}
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