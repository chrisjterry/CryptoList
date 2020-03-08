import React from 'react';
import EditEducation from './edit_education'

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: this.props.profileId,
            graduation_year: '',
            school_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProfileEducation(this.state);
        this.setState({
            graduation_year: '',
            school_name: ''
        });
    }
    
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        };
    }

    render() {
        const { educations, updateProfileEducation, deleteProfileEducation } = this.props;
        let editEducationComponents = educations.map( education => 
            <EditEducation 
                key={education.id} 
                education={education} 
                updateProfileEducation={updateProfileEducation}
                deleteProfileEducation={deleteProfileEducation} 
            />);

        return (
            <div className='subprofile-form-div'>
                <h2>EDUCATION</h2>
                <div>
                    <form className='subprofile-create-form' onSubmit={this.handleSubmit}>
                        <label>ADD EDUCATION
                            <input
                                type="text"
                                placeholder='Graduation year'
                                onChange={this.handleInput('graduation_year')}
                                value={this.state.graduation_year}
                            />
                            <input
                                type="text"
                                placeholder='School name'
                                onChange={this.handleInput('school_name')}
                                value={this.state.school_name}
                            />
                            <button>Add</button>
                        </label>
                    </form>
                    {editEducationComponents}
                </div>
            </div> 
        )
    }
}

export default EducationForm;