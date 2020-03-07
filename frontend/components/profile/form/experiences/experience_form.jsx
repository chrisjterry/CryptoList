import React from 'react';
import EditExperience from './edit_experience'

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: this.props.profileId,
            employee_title: '',
            company_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProfileExperience(this.state);
    }
    
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        const { experiences, updateProfileExperience } = this.props;

        return (
            <div className='subprofile-form-div'>
                <h2>EXPERIENCE</h2>
                <div>
                    <form className='subprofile-create-form' onSubmit={this.handleSubmit}>
                        <h3>ADD EXPERIENCE</h3>
                        <input
                            type="text"
                            placeholder='Your title'
                            onChange={this.handleInput('employee_title')}
                            value={this.state.employee_title}
                        />
                        <input
                            type="text"
                            placeholder='Company'
                            onChange={this.handleInput('company_name')}
                            value={this.state.company_name}
                        />
                        <button>Add</button>
                    </form>
                    {experiences.map( experience => <EditExperience key={experience.id} experience={experience} updateProfileExperience={updateProfileExperience} /> )}
                </div>
            </div> 
        )
    }
}

export default ExperienceForm;